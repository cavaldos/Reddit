#  Reddit 🌈"💯👍💡 ⭐️ 🔥

### Node.js TypeScript Express.js

<br />


## Manual Installation

1. Clone project

```shell
git clone https://github.com/cavaldos/Node-template.git
```

2. Rename

```shell
mv  Node-template New-name
```

3. Move path

```shell
cd New-name
```

4. Delete git

```shell
rm -rf .git
```

5. Install

```shell
yarn add  # npm install  # pnpm install
```

6. Run Production

```shell
yarn run  start:prod
```

8. Run Development

```shell
yarn run dev
```

9. Build

```shell
yarn run build
```

## Docker

### Build docker

1.Build your updated version of the image, using the `docker build` command.

```shell
docker build -t  project-name .
```

2.Start a new container using the updated code.

```shell
docker run -dp 3000:3000  project-name .

```





<br />

## [Environment Variables](#environment-variables)

```shell
PORT=3000
```

<br />

## [Project Structure](#project-structure)

```js
├─ src
│  ├─ api
│  │  ├─ controllers
│  │  │   └─ index.ts
│  │  ├─ middlewares
│  │  │   └─ index.ts
│  │  ├─ routes
│  │  │   └─ index.ts
│  │  └─ validators
│  │      └─ index.ts
│  ├─ config
│  │  └─ index.ts
│  ├─ loaders
│  │  └─ index.ts
│  ├─ models
│  │  └─ index.ts
│  └─ utils
│      └─ index.ts
├─ main.ts
├─ tsconfig.json
├─ .tsconfig.build.json
├─ .env
├─ README.md
├─ .gitignore
├─ LICENSE
├─ package-lock.json
└─ package.json
```

## [API Documentation](#api-documentation)

### API Endpoints

List of available routes:

**Routes**:
cái bảng dưới này mai sửa lại nha 

| object | Functionality | Method | Endpoint                       | Request Body            | Response                      |
| ------ | ------------- | ------ | ------------------------------ | ----------------------- | ----------------------------- |
| auth   | signin        | POST   | /auth/users                    | {name, email, password} | {user object}                 |
|        | signup        | POST   | /auth/login                    | {email, password}       | {token}                       |
|        | resetpassword | GET    | /auth/reset                    | -                       | {book objects array}          |
| -      | -             | -      | -                              | -                       | -                             |
| book   | get all book  | GET    | /book/getall                   | -                       | {matching book objects array} |
|        | create book   | POST   | /book/create                   | -                       | {book object}                 |
|        | delete book   | DELETE | /book/delete                   | {\_id}                  | -                             |
|        | update        | PUT    | /api/return/:id                | {return_date}           | -                             |
|        | pagingation   | GET    | /book/list?page={}&pageSize={} | -                       | {lend/return objects array}   |
|        | find          | GET    | /book/{\_id}                   | -                       | {lend/return objects array}   |
| -      | -             | -      | -                              | -                       | -                             |
| user   | getall        | GET    | /user/getall                   | -                       | {lend/return objects array}   |
|        | delete        | DELETE | /user/:\_id                    | -                       | {lend/return objects array}   |
|        | update        | PUT    | /user/update                   | -                       | {lend/return objects array}   |
|        | create        | POST   | /user/create                   | -                       | {lend/return objects array}   |
|        | find          | GET    | /user/:\_id                    | -                       | {lend/return objects array}   |

<br />
