### Introduction

`NextJS version14` `app router` `Supabase` を使ったタスク作成アプリケーション

| Index  | Description                                                 |
| ------ | ----------------------------------------------------------- |
| Udemy  | https://www.udemy.com/course/nextjs-supabase-app-directory/ |
| Github | ---                                                         |
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

| Index          | AsIs                                                                                                   | ToBe                                                                   | Solution                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| route handler  | route ハンドラで記述した処理は静的な要素としてビルドされる<br>\*ビルド時点で取得したデータが表示される | API にリクエストが発生されるたびに動的にデータを取得したい             | [export const dynamic = 'force-dynamic'](https://nextjs.org/docs/14/app/api-reference/file-conventions/route-segment-config#dynamic) |
| fetch cache    | fetch 関数を使ってデータを取得するとデフォルトではキャッシュを利用する設定になっている                 | キャッシュを利用せず、fetch 関数実行時に返却された値を取得したい       | [fetch(`https://...`, { cache: 'no-store' })](https://nextjs.org/docs/14/app/api-reference/functions/fetch#optionscache)             |
| cache log      | fetch 関数実行時にキャッシュが利用されているか分からない                                               | キャッシュが利用されている場合ターミナルに `cache: HIT` と表示させたい | [next.config.mjs に設定を記述](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)                              |
| api route      | ---                                                                                                    | 動的にパラメータの値を受け取りたい                                     | `async (_: NextRequest, { params }: { params: { id: string } }) => {}`                                                               |
| server actions | ---                                                                                                    | server actions でフォームの入力値を受け取りたい                        | 引数に formData `FormData型` を受け取るように記述する                                                                                |
| server actions | ---                                                                                                    | formData で取得した値を展開したい                                      | formDate に対して get メソッドを使う<br>ex: `formDate.get('title') as string`                                                        |
| server actions | ---                                                                                                    | フォームの name 属性以外の値を server actions に渡したい               | form のコンポーネント側で `bind` メソッドを使う<br>bind の第 1 引数は null, 第 2 引数に変更したい値を指定する                        |
| server actions | ---                                                                                                    | `bind` メソッドを使った実装例                                          | `updateTask.bind(null, task._id)`                                                                                                    |
| useFormState   | ---                                                                                                    | server actions が返す値をクライアント側で使用したい                    | ex: `const [state, formAction] = useFormState(updateTaskWithId, initialState)`                                                       |

### Tips \*MongoDB

| Index    | Want                                                 | Answer                                                                                                                                                                |
| -------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mongoose | mongoDB に保存するドキュメントの型を定義したい       | `models`配下で管理<br>1. 登録したいドキュメントの型を定義する<br>2. デフォルトで使用する型は Document 型を使って extends して定義する                                 |
| mongoose | mongoDB のドキュメントの構造(Schema)を定義したい     | `models`配下で管理<br>`new mongoose.Schema` を使って定義する                                                                                                          |
| mongoose | DB と接続したい                                      | `src/utils/database.ts` で定義した関数を使用する<br>ex: `await connectDb()`                                                                                           |
| mongoose | ドキュメントをインサートしたい                       | modle に対して.create 関数を使う<br>ex: `await TaskModel.create(newTask)`                                                                                             |
| Schema   | `interface`と`new mongoose.Schema`との役割の違いは？ | `interface` TypeScript のインターフェースであり、コード内で型チェックを行うためのもの<br>`Schema` Mongoose の機能であり、MongoDB に保存されるドキュメントの構造を定義 |
