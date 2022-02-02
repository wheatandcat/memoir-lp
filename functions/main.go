package postInquiry

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"log"
	"net/http"
	"os"
	"time"

	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/v4/is"
	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"
)

var spreadsheetID = os.Getenv("SPREADSHEET_ID")

type Request struct {
	Body     string `json:"body"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Env      string `json:"env"`
	UserID   string `json:"userID"`
	Device   string `json:"device"`
	Category string `json:"category"`
}

func (r Request) Validate() error {
	return validation.ValidateStruct(&r,
		validation.Field(
			&r.Name,
			validation.Required.Error("名前の入力は必須です"),
			validation.RuneLength(1, 100).Error("名前は最大100文字までです"),
		),
		validation.Field(
			&r.Email,
			validation.Required.Error("Emailの入力は必須です"),
			validation.RuneLength(1, 200).Error("ールアドレスは最大200文字までです"),
			is.Email.Error("メールアドレスを入力して下さい"),
		),
		validation.Field(
			&r.Body,
			validation.Required.Error("本文の入力は必須です"),
			validation.RuneLength(1, 2000).Error("本文は最大2000文字までです"),
		),
	)
}

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

	var req Request

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if err := req.Validate(); err != nil {
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
				req.Device,
				req.Category,
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
