### API Endpoints

List of available routes:

**All Routes**:

| object | Functionality | Method | Endpoint                       | Request Body            | Response                      |
| ------ | ------------- | ------ | ------------------------------ | ----------------------- | ----------------------------- |
| auth   | signin        | POST   | /auth/users                    | {name, email, password} | {user object}                 |
|        | signup        | POST   | /auth/login                    | {email, password}       | {token}                       |
|        | resetpassword | GET    | /auth/reset                    | -                       | {post objects array}          |
| -      | -             | -      | -                              | -                       | -                             |
| post   | get all book  | GET    | /post/getall                   | -                       | {matching post objects array} |
|        | create post   | POST   | /post/create                   | -                       | {post object}                 |
|        | delete post   | DELETE | /post/delete                   | {\_id}                  | -                             |
|        | update        | PUT    | /api/return/:id                | {return_date}           | -                             |
|        | pagingation   | GET    | /post/list?page={}&pageSize={} | -                       | {lend/return objects array}   |
|        | find          | GET    | /post/{\_id}                   | -                       | {lend/return objects array}   |
| -      | -             | -      | -                              | -                       | -                             |
| user   | getall        | GET    | /user/getall                   | -                       | {lend/return objects array}   |
|        | delete        | DELETE | /user/:\_id                    | -                       | {lend/return objects array}   |
|        | update        | PUT    | /user/update                   | -                       | {lend/return objects array}   |
|        | create        | POST   | /user/create                   | -                       | {lend/return objects array}   |
|        | find          | GET    | /user/:\_id                    | -                       | {lend/return objects array}   |
| -      | -             | -      | -                              | -                       | -                             |
| user   | getall        | GET    | /user/getall                   | -                       | {lend/return objects array}   |
|        | delete        | DELETE | /user/:\_id                    | -                       | {lend/return objects array}   |
|        | update        | PUT    | /user/update                   | -                       | {lend/return objects array}   |
|        | create        | POST   | /user/create                   | -                       | {lend/return objects array}   |
|        | find          | GET    | /user/:\_id                    | -                       | {lend/return objects array}   |

<br />
