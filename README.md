# Prologue
RailsとVueの初期セットアップです。
cloneしてすぐに機能実装に入れるように必要な設定をまとめています。
技術のアップデートに追従して常にメンテナンスしていきましょう。
入れておきたい設定・ライブラリがあればプルリクをお願いします。

## Tech Stack
* Ruby
2.4.2

* Rails
5.2.1

* Postgres
10

* Redis
latest

* node
10

## How to use

## Setup

### App name
アプリの名前が決まったら、`prologue`を自分のアプリの名前に変えてください。
- config/application.rb
- docker-sync.yml
- docker-compose.yml
- package.json
- README.md

### Docker

#### 初回起動
OSXの場合

```
$ git clone git@github.com:yoshioka-s/Prologue.git
$ cd Prologue

# docker-syncのインストール
$ gem install docker-sync
$ brew install fswatch
$ brew install unison

# docker-sync起動 例：$ docker volume create --name=prologue-sync
$ docker volume create --name={アプリ名}-sync
$ docker-sync start

# コンテナのビルド
$ docker-compose up -d --build

# appコンテナに入る
$ docker exec -it prologue_app_1 /bin/bash
# コンテナ内で
$ bin/setup
```

#### 2回目以降

```
# docker-sync起動
$ docker-sync start
# docker起動
$ docker-compose up -d
```

#### サーバー起動

```
# コンテナ内でRailsサーバー起動
$ rails s -p 3000 -b '0.0.0.0'
# コンテナ内で（別ウィンドウで）webpack-dev-server起動
$ npm run dev
```

`localhost:8080`で動作を確認してください。

## Deploy
Herokuにすぐデプロイできます。
RubyとNodeのビルドパックを追加し、以下の環境変数を設定するだけいいはずです。
- `HOST`: デプロイURL
- `NODE_ENV`: production
- `NPM_CONFIG_PRODUCTION`: false