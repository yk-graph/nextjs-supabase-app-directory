### Introduction

`NextJS version14` `app router` `Supabase` を使ったタスク作成アプリケーション

| Index  | Description                                                 |
| ------ | ----------------------------------------------------------- |
| Udemy  | https://www.udemy.com/course/nextjs-supabase-app-directory/ |
| Github | https://github.com/yk-graph/nextjs-supabase-app-directory   |
| Deploy | ---                                                         |

| Stack  | Description          |
| ------ | -------------------- |
| Nextjs | version 14 AppRouter |
| form   | server actions       |
| DB     | supabase             |

| Lib                                                                          | Description |
| ---------------------------------------------------------------------------- | --- |
| [heroicons/react](https://www.npmjs.com/package/@heroicons/react)            | アイコン |
| [@supabase/ssr](https://www.npmjs.com/package/@supabase/ssr)                 | Supabase のデータベースや認証機能をサーバーサイドで処理しながら HTML を生成するためのライブラリ |
| [@supabase/supabase-js](https://www.npmjs.com/package/@supabase/supabase-js) | supabase が提供する DB との通信を簡単に実行してくれるためのライブラリ |
| [date-fns](https://date-fns.org/)                                            | ブラウザと Node.js で JavaScript の日付を操作するため JavaScript ライブラリ |

### Tips \*NextJS

| Index          | AsIs | ToBe  | Solution  |
| -------------- | ---- | ----- | --------- |
| SSG            | --- | SSGでコンポーネントを作成する方法を知りたい | 何も指定しないとDefaultでSSGとして挙動する<br>npm run buildのコマンドを実行してターミナルにStaticと表示されていたらSSG |
| SSR            | --- | SSRでコンポーネントを作成する方法を知りたい | fetch関数にOptionで `cache: 'no-store'`を指定するとSSRとなる |
| fetch          | --- | fetchしたデータを元にSSGでページを生成したい | fetch関数でOptionに何も指定しないとDefaultでSSGとなる **※ver14まで** |
| cache-check    | --- | どのようなページがbuild時に生成されているか知りたい | 1. npm run build<br>2. `.next/server/app` に `index.html` としてbuildされるので確認できる<br>3. fetch関数にOptionで `cache: 'no-store'` を指定していたらSSRになるため確認できない |

### Tips \*MongoDB

| Index    | Want                                                 | Answer                                                                                                                                                                |
| -------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mongoose | mongoDB に保存するドキュメントの型を定義したい       | `models`配下で管理<br>1. 登録したいドキュメントの型を定義する<br>2. デフォルトで使用する型は Document 型を使って extends して定義する                                 |
| mongoose | mongoDB のドキュメントの構造(Schema)を定義したい     | `models`配下で管理<br>`new mongoose.Schema` を使って定義する                                                                                                          |
| mongoose | DB と接続したい                                      | `src/utils/database.ts` で定義した関数を使用する<br>ex: `await connectDb()`                                                                                           |
| mongoose | ドキュメントをインサートしたい                       | modle に対して.create 関数を使う<br>ex: `await TaskModel.create(newTask)`                                                                                             |
| Schema   | `interface`と`new mongoose.Schema`との役割の違いは？ | `interface` TypeScript のインターフェースであり、コード内で型チェックを行うためのもの<br>`Schema` Mongoose の機能であり、MongoDB に保存されるドキュメントの構造を定義 |
