<div id="top"></div>

## 使用技術一覧

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-Typescript-000000.svg?logo=typescript&style=for-the-badge">
</p>

<!-- プロジェクト名を記載 -->

## プロジェクト名
CompareWeatherForcastApp  


<!-- プロジェクトについて -->

## プロジェクトについて

今と昔の気象情報を比較するアプリケーション
地図上でクリックした箇所の任意の過去の情報と今を比較することができる。

<!-- プロジェクトの概要を記載 -->

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

### 言語・フレームワーク

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| React                | 19.2.4     |
| Next.js              | 16.2.4     |

その他のパッケージのバージョンはpackage.json を参照してください

## 開発環境構築

<!-- コンテナの作成方法、パッケージのインストール方法など、開発環境構築に必要な情報を記載 -->

### モジュールのインストール方法

下記のコードをコマンドプロンプト上で実行しモジュールをインストールする

```bash
npm install
```

### 実行手順

モジュールインストール後、下記を実行するとlocalhost:3000で実行される

```bash
npm run dev
```

### 環境変数の一覧

| 変数名                    | 役割                                           |
| ------------------------- | ---------------------------------------------- |
| NEXT_PUBLEC_LIFF_ID              | LINEのログインをするためのID(ログイン時に使用) |
| LIFF_URL             | ログインのためのAPIのURL(ログイン時に使用)     |
| LIFF_CHANNEL_ID       | LIFF_IDの一部(ログイン時に使用)                |
※LINEのログイン機能に関してはhooks/useSub.tsxにてコメントアウトしています。  


<p align="right">(<a href="#top">トップへ</a>)</p>
