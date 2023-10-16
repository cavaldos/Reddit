# Reddit 🌈"💯👍💡 ⭐️ 🔥

### Node.js TypeScript Express.js

<br />

## Manual Installation

1. Clone project

```shell
git clone https://github.com/cavaldos/Reddit.git
```

2. Move path

```shell
cd Reddit
```

3. Move server

```shell
cd server
```

4. Install

```shell
yarn add  # npm install  # pnpm install
```

5. Run Production

```shell
yarn run  start:prod
```

6. Run Development

```shell
yarn run dev
```

7. Build

```shell
yarn run build
```

## Docker

### Build docker

1.Build your updated version of the image, using the `docker build` command.

```shell
docker build -t  reddit-clone-server .
```

2.Start a new container using the updated code.

```shell
docker run -dp 3000:3000  reddit-clone-server .

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

**Auth Routes**:

| Functionality  | Method | Endpoint            | Request Header | Request Body        | Response      |
| -------------- | ------ | ------------------- | -------------- | ------------------- | ------------- |
| log in         | POST   | /auth               |                | { email, password } | {user object} |
| log out        | GET    | /auth/logout        |                | -                   | -             |
| register       | POST   | /auth/register      |                | { email, password } | -             |
| reset password | GET    | /auth/resetPassword | Authorization  | -                   | -             |
| refresh token  | GET    | /auth/refreshToken  | Authorization  | -                   |               |

**Post Routes**:

| object | Functionality | Method | Endpoint                          | Request Header | Request Body | Response             |
| ------ | ------------- | ------ | --------------------------------- | -------------- | ------------ | -------------------- |
| post   | get posts     | GET    | /post?subredditName=&limit=&page= | -              | -            | {post objects array} |

**Subreddit Routes**:

| object    | Functionality                | Method | Endpoint                     | Request Header | Request Body                    | Response             |
| --------- | ---------------------------- | ------ | ---------------------------- | -------------- | ------------------------------- | -------------------- |
| subreddit | search                       | GET    | /subreddit/search?q=         | -              | -                               | { subreddit }        |
|           | create subreddit             | POST   | /subreddit                   | Authorization  | { name }                        | { subreddit object } |
|           | subscribe                    | POST   | /subreddit/subscribe         | Authorization  | { subredditId }                 | { subredditId }      |
|           | unsubscirbe                  | POST   | /subreddit/unsubscribe       | Authorization  | { subredditId }                 | -                    |
|           | create post in subreddit     | POST   | /subreddit/post              | Authorization  | { title, content, subredditId } | { post object }      |
|           | comment to post in subreddit | PATCH  | /subreddit/post/comment      | Authorization  | { postId, text, replyToId }     | -                    |
|           | vote to post in subreddit    | PATCH  | /subreddit/post/vote         | Authorization  | { postId, voteType }            | {voteCount}          |
|           | vote to a comment            | PATCH  | /subreddit/post/comment/vote | Authorization  | { commentId, voteType }         | -                    |


**User Routes**:

| object | Functionality         | Method | Endpoint       | Request Header | Request Body | Response        |
| ------ | --------------------- | ------ | -------------- | -------------- | ------------ | --------------- |
| user   | get user information  | GET    | /user/:\id     |                | -            | { user object } |
|        | change username       | PATCH  | /user/username | Authorization  | { name }     | -               |
|        | upload user imagine   | POST   | /user/imagine  | Authorization  | { file }     | -               |
|        | download user imagine | GET    | /user/imagine  | Authorization  | { file }     | -               |


<br />



