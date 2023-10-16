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

| object    | Functionality                          | Method | Endpoint                     | Request Header | Request Body                    | Response             |
| --------- | -------------------------------------- | ------ | ---------------------------- | -------------- | ------------------------------- | -------------------- |
| subreddit | search                                 | GET    | /subreddit/search?q=         | -              | -                               | { subreddit }        |
|           | create subreddit                       | POST   | /subreddit                   | Authorization  | { name }                        | { subreddit object } |
|           | subscribe                              | POST   | /subreddit/subscribe         | Authorization  | { subredditId }                 | { subredditId }      |
|           | unsubscirbe                            | POST   | /subreddit/unsubscribe       | Authorization  | { subredditId }                 | -                    |
|           | create post in subreddit               | POST   | /subreddit/post              | Authorization  | { title, content, subredditId } | { post object }      |
|           | comment to post in subreddit           | PATCH  | /subreddit/post/comment      | Authorization  | { postId, text, replyToId }     | -                    |
|           | vote to post in subreddit              | PATCH  | /subreddit/post/vote         | Authorization  | { postId, voteType }            | {voteCount}          |
|           | vote to a comment in post in subreddit | PATCH  | /subreddit/post/cooment/vote | Authorization  | { commentId, voteType }         | -                    |


**User Routes**:

| object | Functionality         | Method | Endpoint       | Request Header | Request Body | Response        |
| ------ | --------------------- | ------ | -------------- | -------------- | ------------ | --------------- |
| user   | get user information  | GET    | /user/:\id     |                | -            | { user object } |
|        | change username       | PATCH  | /user/username | Authorization  | { name }     | -               |
|        | upload user imagine   | POST   | /user/imagine  | Authorization  | { file }     | -               |
|        | download user imagine | GET    | /user/imagine  | Authorization  | { file }     | -               |


<br />
