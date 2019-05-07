# Users

## Add Users to Bucket

Add a user to your Bucket. Authentication token is required and must have admin level access.

| Parameter  | Required | Type   | Description                                                 |
| ---------- | -------- | ------ | ----------------------------------------------------------- |
| email      | required | String | The new user's email                                        |
| role       | required | Enum   | admin, developer, editor or contributor                     |
| first_name |          | String | The new user's first name                                   |
| last_name  |          | String | The new user's last name                                    |
| write_key  |          | String | Include if a write access key has been added to your Bucket |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/users
```

**Example Request**

```json
{
	"email": "newuser@example.com",
	"role": "editor"
}
```

**Example Response**

```json
{
	"status": 200,
	"message": "User added."
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.addUser()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
	slug: 'bucket-slug',
	write_key: ''
})
const params = {
	email: 'newuser@example.com',
	role: 'editor',
	first_name: 'Quasar',
	last_name: 'Jones'
}
bucket
	.addUser(params)
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
```

**Example Response**

```json
{
	"status": 200,
	"message": "User added."
}
```

:::

::::

## Get Users

Get users in your Bucket. Authentication token is required in the header (see Authentication section). Must have admin level access.

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/users
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/creative-agency/users" \
-H "Authorization: Bearer <ACCESS_TOKEN>"
```

**Example Response**

```json
{
	"users": [
		{
			"_id": "5357ef811693be2118000001",
			"first_name": "Starman",
			"last_name": "Jones",
			"email": "starman@milkyway.com",
			"username": "starman",
			"bio": "Enjoy traveling at the speed of light, black holes and supernovas are my jam.",
			"avatar_url": "https://cosmicjs.imgix.net/1c3690c0-9dbc-11e7-b30d-b3b3f0076a4f-me.jpg",
			"website": "https://starman.com",
			"twitter": "https://twitter.com/starman",
			"linkedin": "http://linkedin.com/in/starman",
			"github": "http://github.com/starman",
			"company": "Starman Inc.",
			"location": "Neptune"
		},
		{
			"_id": "56d66b2f903a79b904000001",
			"first_name": "Quasar",
			"last_name": "Jones",
			"email": "quasar@milkyway.com",
			"username": "quasar",
			"bio": "I contain massive black holes and may evolve into a galaxy.",
			"avatar_url": "https://cosmic-s3.imgix.net/08544a00-eaa3-11e7-8c73-5dadcfada90e-wave.jpg",
			"website": "https://quasar.com",
			"twitter": "https://twitter.com/quasar",
			"linkedin": "http://linkedin.com/in/quasar",
			"github": "http://github.com/quasar",
			"company": "Quasar Inc.",
			"location": "Titan"
		}
	],
	"total": 2
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.getUsers()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
	slug: 'bucket-slug'
})
bucket
	.getUsers()
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
```

**Example Response**

```json
{
	"users": [
		{
			"_id": "5357ef811693be2118000001",
			"first_name": "Starman",
			"last_name": "Jones",
			"email": "starman@milkyway.com",
			"username": "starman",
			"bio": "Enjoy traveling at the speed of light, black holes and supernovas are my jam.",
			"avatar_url": "https://cosmicjs.imgix.net/1c3690c0-9dbc-11e7-b30d-b3b3f0076a4f-me.jpg",
			"website": "https://starman.com",
			"twitter": "https://twitter.com/starman",
			"linkedin": "http://linkedin.com/in/starman",
			"github": "http://github.com/starman",
			"company": "Starman Inc.",
			"location": "Neptune"
		},
		{
			"_id": "56d66b2f903a79b904000001",
			"first_name": "Quasar",
			"last_name": "Jones",
			"email": "quasar@milkyway.com",
			"username": "quasar",
			"bio": "I contain massive black holes and may evolve into a galaxy.",
			"avatar_url": "https://cosmic-s3.imgix.net/08544a00-eaa3-11e7-8c73-5dadcfada90e-wave.jpg",
			"website": "https://quasar.com",
			"twitter": "https://twitter.com/quasar",
			"linkedin": "http://linkedin.com/in/quasar",
			"github": "http://github.com/quasar",
			"company": "Quasar Inc.",
			"location": "Titan"
		}
	],
	"total": 2
}
```

:::

::::

## Get User

Get a single user from your Bucket. Authentication token is required in the header (see Authentication section). Must have admin level access.

| Parameter | Required | Type   | Description                      |
| --------- | -------- | ------ | -------------------------------- |
| id        | required | String | User's id (found as `_id` param) |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/users/:user_id
```

**Example Response**

```json
{
	"user": {
		"_id": "5357ef811693be2118000001",
		"first_name": "Starman",
		"last_name": "Jones",
		"email": "starman@milkyway.com",
		"username": "starman",
		"bio": "Enjoy traveling at the speed of light, black holes and supernovas are my jam.",
		"avatar_url": "https://cosmicjs.imgix.net/1c3690c0-9dbc-11e7-b30d-b3b3f0076a4f-me.jpg",
		"website": "https://starman.com",
		"twitter": "https://twitter.com/starman",
		"linkedin": "http://linkedin.com/in/starman",
		"github": "http://github.com/starman",
		"company": "Starman Inc.",
		"location": "Neptune"
	}
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.getUser()const bucket = Cosmic.bucket({
  slug: 'bucket-slug'
})
const params = {
  id: '5357ef811693be2118000001'
}
bucket.getUser(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
	"user": {
		"_id": "5357ef811693be2118000001",
		"first_name": "Starman",
		"last_name": "Jones",
		"email": "starman@milkyway.com",
		"username": "starman",
		"bio": "Enjoy traveling at the speed of light, black holes and supernovas are my jam.",
		"avatar_url": "https://cosmicjs.imgix.net/1c3690c0-9dbc-11e7-b30d-b3b3f0076a4f-me.jpg",
		"website": "https://starman.com",
		"twitter": "https://twitter.com/starman",
		"linkedin": "http://linkedin.com/in/starman",
		"github": "http://github.com/starman",
		"company": "Starman Inc.",
		"location": "Neptune"
	}
}
```

:::

::::
