# 問い合わせの内容をスプレットシートに保存する


## デプロイ

```
$ export GCP_SERVICE_ACCOUNT_JSON=$(base64 -i serviceAccount.json | cat)

$ gcloud functions deploy PostInquiry --set-env-vars GCP_SERVICE_ACCOUNT_JSON=$GCP_SERVICE_ACCOUNT_JSON,SPREADSHEET_ID=$SPREADSHEET_ID --runtime go116 --trigger-http --region asia-northeast1
```
