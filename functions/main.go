package postInquiry

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"
)

var spreadsheetID = os.Getenv("SPREADSHEET_ID")

func PostInquiry(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case http.MethodOptions:
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Max-Age", "3600")
		w.WriteHeader(http.StatusNoContent)
		return
	}

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	var req struct {
		Body   string `json:"body"`
		Name   string `json:"name"`
		Email  string `json:"email"`
		Env    string `json:"env"`
		UserID string `json:"userID"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	loc, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	nowJST := time.Now().In(loc)

	dec, err := base64.StdEncoding.DecodeString(os.Getenv("GCP_SERVICE_ACCOUNT_JSON"))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	ctx := context.Background()
	credential := option.WithCredentialsJSON([]byte(dec))
	srv, err := sheets.NewService(context.TODO(), credential)
	if err != nil {
		log.Fatal(err)
	}
	rb := &sheets.ValueRange{
		MajorDimension: "ROWS",
		Values: [][]interface{}{
			{
				req.Body,
				req.Name,
				req.Email,
				req.Env,
				req.UserID,
				nowJST.Format("2006-01-02T15:04:05+09:00"),
			},
		},
	}

	readRange := "問い合わせ!A1"

	_, err = srv.Spreadsheets.Values.Append(spreadsheetID, readRange, rb).ValueInputOption("USER_ENTERED").Context(ctx).Do()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
}