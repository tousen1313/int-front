# 環境構築(docker なし版)

homebrew がインストール出来ていることを確認して下さい。  
vscode のターミナルでコマンド実行すると`npm i`が正しく動かない可能性があるので、何かしらのターミナルソフト(terminal.app とか iterm とか)でコマンド実行すると躓かなくて良いと思います。

## ダミー API サーバー

ユーザー側フロント実装時に使用したダミーの API を使用します。  
以下のリポジトリの環境構築を済ませて下さい。  
[https://github.com/microhr-intern/dummyAPIServer](https://github.com/microhr-intern/dummyAPIServer)

## node インストール

```bash
brew install node
```

必要なコマンドが入っているかどうかは以下で確認できます  
以下のようにバージョン番号が出力されれば OK です。（バージョン番号まで同じである必要はありません。）

```bash
$ node -v
v21.7.2
$ npm -v
10.5.0
```

## clone

SSH を有効化してる場合

```bash
git clone git@github.com:microhr-intern/frontend.git
```

SSH を有効化していない場合

```bash
git clone https://github.com/microhr-intern/frontend.git
```

## 各種ライブラリのインストール

cd で clone してきたディレクトリまで移動

```bash
cd frontend/microhr
```

インストール

```bash
npm install
```

## 起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)にアクセスすることで確認できます。  
起動後初回のアクセスはコンパイルで少しだけ表示が遅いです。

## 直接リンクを踏まないとアクセスできない画面

ログイン処理が API 未実装のため、現在ログアウト中の画面が表示されます。  
以下のログイン後の処理は、直接リンクにアクセスすることで確認できます。

- [プロフィール](http://localhost:3000/worker/profile)
- [応募管理画面](http://localhost:3000/worker/job/manage)

不足あれば言って下さい。

# 使用技術

- TypeScript
- Next.js

# ライブラリ

##　設定

- prettier
- es-lint

# スタイリング

- tailwind
- tailwind 製ライブラリ
