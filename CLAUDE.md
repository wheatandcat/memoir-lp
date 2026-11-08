# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

memoir アプリの LP サイト（https://www.memoir-app.dev/ ）。Next.js 16 (Pages Router, Turbopack) + React 19 + TypeScript + Tailwind CSS 3。Node.js 26 系（`.node-version`）。お問い合わせ保存用の Go 製 Cloud Function を `functions/` に同梱している。

## コマンド

パッケージマネージャは yarn v1。

```zsh
yarn dev      # ローカル開発サーバー
yarn build    # 本番ビルド
yarn lint     # eslint .（flat config: eslint.config.mjs）
```

テストは存在しない。

## アーキテクチャ

- **ページ構成**: `pages/` の各ページは `<Head>` と Header/Footer のレイアウトを持ち、本文は `components/templates/<Page>/Page.tsx` に委譲する。
- **コンポーネント**: Atomic Design 風に `components/molecules` → `organisms` → `templates` の階層。
- **アプリ内 WebView 用ページ**: `pages/privacy/app.tsx` / `pages/terms/app.tsx` は Header/Footer を持たず、テンプレートに `app` prop を渡して見出しやスタイルを切り替える（モバイルアプリ内表示用）。
- **パスエイリアス**: `@components/*`, `@hooks/*`, `@lib/*` は `tsconfig.json` の `paths` のみで定義（Next が解決する）。
- **Tailwind**: カスタムカラー `primary` / `secondary` / `white`（300/600/900）を `tailwind.config.js` で定義。動的に組み立てるクラスは `safelist` に追加すること。
- **Ko-fi ボタン**: `components/molecules/KofiButton/` の自前実装（`react-kofi-button` の "thin" プリセットを CSS Modules に移植）。同ライブラリは JS から scss を require しており Turbopack で動かないため使わないこと。フォント Quicksand は `_document.js` の Google Fonts で読み込む。
- **@types/react の重複**: `@types/react-scroll` が古い `@types/react` を引くため、`package.json` の `resolutions` で固定している。

## お問い合わせフロー

1. `components/organisms/Contact/Form.tsx`（Formik + Yup でバリデーション）が `NEXT_PUBLIC_INQUIRY_API`（`.env`）へ JSON を POST。
2. `functions/main.go` の `PostInquiry`（GCP Cloud Functions, Go）が ozzo-validation で再検証し、Google Sheets の「問い合わせ」シートに追記。
3. 成功時は `/thanks?name=...` へ遷移。

フロントの Yup スキーマと Go 側のバリデーション（名前100文字・メール・本文2000文字）は対応しているので、変更時は両方を揃える。

Function のデプロイ（`functions/README.md` より）:

```zsh
export GCP_SERVICE_ACCOUNT_JSON=$(base64 -i serviceAccount.json | cat)
gcloud functions deploy PostInquiry --set-env-vars GCP_SERVICE_ACCOUNT_JSON=$GCP_SERVICE_ACCOUNT_JSON,SPREADSHEET_ID=$SPREADSHEET_ID --runtime go116 --trigger-http --region asia-northeast1
```

## コードスタイル

- Prettier: printWidth 120、インデント4スペース、ダブルクォート。
- ESLint: `eslint-config-next/core-web-vitals` + `eslint-plugin-tailwindcss`（flat/recommended）。`import/order` はアルファベット順必須。
