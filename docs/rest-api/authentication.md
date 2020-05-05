# Authentication

## Get your token
You can get your authentication token in your user account settings located in <i><a href="https://cosmicjs.com/account/authentication">Account Settings > Authentication</a></i>. You can also make requests to the API with your `email` and `password`.

Send your `email` and `password` to receive your access token. Your access token will be used to add Buckets to your account as well as other account-related access.

**NOTE: You do not need to use the token to access your Bucket. Your Bucket has its own read and write keys for restricted access.**

| Parameter | Required | Type   | Description                   |
| --------- | -------- | ------ | ----------------------------- |
| email     | required | String | Your Cosmic login email    |
| password  | required | String | Your Cosmic login password |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/authenticate
```

**Example Request**

```bash
# With shell, you can just pass your email and password
curl -X POST "https://api.cosmicjs.com/v1/authenticate" \
-d "email=you@youremail.com" \
-d "password=yourpassword"
```

**Example Response**

```json
{
  "success": true,
  "message": "Token created successfully.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV.eyJlbWFpbCI6InNwaXJvbnl..."
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.authenticate()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')() // double parentheses to init function without token
Cosmic.authenticate({
  email: 'you@youremail.com',
  password: 'yourpassword'
}).then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "success": true,
  "message": "Token created successfully.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV.eyJlbWFpbCI6InNwaXJvbnl..."
}
```

:::

::::


## Use your token

You can use the Authentication token using REST requests to the API

**Example Request with CURL**

```bash
curl "https://api.cosmicjs.com/v1/buckets" \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json"
# Gets all Buckets connected to your account. Your authorization token in the header request is the only required property.
```

**Example Request with the NPM module**

```js
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request'
})
Cosmic.getBuckets()
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```