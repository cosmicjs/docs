# Users

### Add Users to Bucket

Add a user to your Bucket. Authentication token is required and must have admin level access.

| Parameter  | Required | Type   | Description                                                 |
| ---------- | -------- | ------ | ----------------------------------------------------------- |
| email      | required | String | The new user's email                                        |
| role       | required | Enum   | admin, developer, editor or contributor                     |
| first_name |          | String | The new user's first name                                   |
| last_name  |          | String | The new user's last name                                    |
| write_key  |          | String | Include if a write access key has been added to your Bucket |

### Get Users

Get users in your Bucket. Authentication token is required in the header (see Authentication section). Must have admin level access.

### Get User

Get a single user from your Bucket. Authentication token is required in the header (see Authentication section). Must have admin level access.

| Parameter | Required | Type   | Description                      |
| --------- | -------- | ------ | -------------------------------- |
| id        | true     | String | User's id (found as `_id` param) |