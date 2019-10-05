# Extensions
All Extension methods require `Authorization: Bearer <ACCESS_TOKEN>` present in the header.

## Add Extension

There are three different methods you can use to add an Extension to your Bucket. Read more about how to build your Extension on the [Extensions documentation page](/docs/extensions).

### 1. Upload a Zip file
The only required post value is `zip` which is the name of your file sent.

| Parameter | Required | Type                    | Description                         |
| --------- | -------- | ----------------------- | ----------------------------------- |
| zip       | required | File Object (see below) | Zip object with specific properties |

**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/extensions
```

**Example Request**

```json
{
  "zip": "your-media-multipart-form-data"
}
```

**Example Response**

```json
{
  "extension": {
    "id": "c62defe0-5f93-11e7-8054-873245f0e98d",
    "title": "Amazon Product Search",
    "image_url": "https://s3-us-west-2.amazonaws.com/cosmicjs/f1f1bd40-5dcd-11e7-b529-51f126a4b6ee-shopping-cart.jpg",
    "url": "https://cosmicjs.com/extensions/c62defe0-5f93-11e7-8054-873245f0e98d/dist",
    "zip_url": "https://cosmicjs.com/extensions/c62defe0-5f93-11e7-8054-873245f0e98d/src/build.zip",
    "installed_at": "2017-07-03T02:03:14.825Z",
    "font_awesome_class": "fa-shopping-basket"
  }
}
```

#### File Object

The `zip` property that includes the File Object must be an object with certain properties indicated below. If using the [multer NPM module](https://www.npmjs.com/package/multer) the file objects have these by default. Otherwise you should create an object with these properties:

| Parameter    | Required | Type        | Description                           |
| ------------ | -------- | ----------- | ------------------------------------- |
| originalname | required | String      | The name of your file (something.jpg) |
| buffer       |          | File Buffer | The File Buffer (must be zip file)    |

### 2. Upload via Zip file URL
The only required post value is `zip_url` which is the URL of your Extension zip file.

| Parameter | Required | Type                    | Description                         |
| --------- | -------- | ----------------------- | ----------------------------------- |
| zip_url       | required | String | Zip file URL with valid Extension properties |

**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/extensions
```

**Example Request**

```json
{
	"zip_url": "https://mycdn.com/uploads/extension.zip"
}
```

**Example Response**

```json
{
  "extension": {
    "id": "c62defe0-5f93-11e7-8054-873245f0e98d",
    "title": "Amazon Product Search",
    "image_url": "https://s3-us-west-2.amazonaws.com/cosmicjs/f1f1bd40-5dcd-11e7-b529-51f126a4b6ee-shopping-cart.jpg",
    "url": "https://cosmicjs.com/extensions/c62defe0-5f93-11e7-8054-873245f0e98d/dist",
    "zip_url": "https://cosmicjs.com/extensions/c62defe0-5f93-11e7-8054-873245f0e98d/src/build.zip",
    "installed_at": "2017-07-03T02:03:14.825Z",
    "font_awesome_class": "fa-shopping-basket"
  }
}
```

### 3. Add as URL
The required post values are `title` and `url`.

| Parameter | Required | Type                    | Description                         |
| --------- | -------- | ----------------------- | ----------------------------------- |
| title       | required | String | Extension title |
| url       | required | String | URL to point the Extension to (iframe). Needs to have https and X-Frame Options enabled) |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/extensions
```

**Example Request**

```json
{
  "zip": "your-media-multipart-form-data"
}
```

**Example Response**

```json
{
  "extension": {
    "id": "c62defe0-5f93-11e7-8054-873245f0e98d",
    "title": "My Awesome Extension",
    "image_url": null,
    "url": null,
    "zip_url": null,
    "installed_at": "2017-07-03T02:03:14.825Z",
    "font_awesome_class": null
  }
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.addExtension()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'YOUR_ACCOUNT_TOKEN' // required
})
const bucket = Cosmic.bucket({
  slug: 'bucket-slug'
})

bucket
  .addExtension({
    zip_url: "https://mycdn.com/uploads/extension.zip"
  })
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
  "extension": {
    "id": "c62defe0-5f93-11e7-8054-873245f0e98d",
    "title": "Amazon Product Search",
    "image_url": "https://s3-us-west-2.amazonaws.com/cosmicjs/f1f1bd40-5dcd-11e7-b529-51f126a4b6ee-shopping-cart.jpg",
    "url": "http://localhost:3000/extensions/c62defe0-5f93-11e7-8054-873245f0e98d/dist",
    "zip_url": "http://localhost:3000/extensions/c62defe0-5f93-11e7-8054-873245f0e98d/src/build.zip",
    "installed_at": "2017-07-03T02:03:14.825Z",
    "font_awesome_class": "fa-shopping-basket"
  }
}
```

:::

::::


## Edit Extension

For security, `query_params` values will be saved as JavaScript Web Tokens (JWT), but available in your Extension as a decoded value.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| query_params |          | Array | Add query parameters to your Extension. Great for adding third-party service API keys.  |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
PUT https://api.cosmicjs.com/v1/:bucket_slug/extensions/:extension_id
```

**Example Request**

```json
{
  "query_params": [
    {
      "key": "some_api_account_id",
      "value": "someapiid12345"
    },
    {
      "key": "some_api_account_secret",
      "value": "supersecret12345"
    }
  ]
}
```

**Example Response**

```json
{
  "extension": {
    "id": "71d1ef20-c132-11e9-9883-b325a8e53f4f",
    "cosmic_extension_id": "5c63324e7489d71dfe2974ac",
    "title": "WordPress Importer",
    "image_url": "https://cosmic-s3.imgix.net/31cc7ee0-2d80-11e9-9636-75201e82cc8c-wordpress-to-cosmic.jpg?w=500",
    "repo_url": "https://github.com/cosmicjs/wordpress-post-importer",
    "url": "https://71d1ef20-c132-11e9-9883-b325a8e53f4f.cosmicext.com",
    "zip_url": "https://cosmicjs.com/extensions/71d1ef20-c132-11e9-9883-b325a8e53f4f/src/extension.zip",
    "installed_at": "2019-08-17T21:03:21.757Z",
    "installed_by": "56d66b2f903a79b904000001",
    "font_awesome_class": "fa-wordpress",
    "query_params": [
      {
        "key": "some_api_account_id",
        "value": "eyJhbGciOiJIUzI1NiJ9.dHJ1ZQ.0hVNE7ES45PA8EnxK6gzAtY-4DfTpGtB0_A2fCW8SuU"
      },
      {
        "key": "some_api_account_secret",
        "value": "eyJhbGciOiJIUzI1NiJ9.dHJ1ZQ.0hVNE7ES45PA8EnxK6gzAtY-4DfTpGtB0_A2fCW8SuU"
      }
    ]
  }
}
```

:::

::: tab Node.js

**Definition**

```js
Cosmic.editExtension()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'YOUR_ACCOUNT_TOKEN' // required
})
const bucket = Cosmic.bucket({
  slug: 'bucket-slug'
})
bucket.editExtension({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d',
  query_params: [
    {
      key: "some_api_account_id",
      value: "someapiid12345"
    },
    {
      key: "some_api_account_secret",
      value: "supersecret12345"
    }
  ]
})
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
  "extension": {
    "id": "71d1ef20-c132-11e9-9883-b325a8e53f4f",
    "cosmic_extension_id": "5c63324e7489d71dfe2974ac",
    "title": "WordPress Importer",
    "image_url": "https://cosmic-s3.imgix.net/31cc7ee0-2d80-11e9-9636-75201e82cc8c-wordpress-to-cosmic.jpg?w=500",
    "repo_url": "https://github.com/cosmicjs/wordpress-post-importer",
    "url": "https://71d1ef20-c132-11e9-9883-b325a8e53f4f.cosmicext.com",
    "zip_url": "https://cosmicjs.com/extensions/71d1ef20-c132-11e9-9883-b325a8e53f4f/src/extension.zip",
    "installed_at": "2019-08-17T21:03:21.757Z",
    "installed_by": "56d66b2f903a79b904000001",
    "font_awesome_class": "fa-wordpress",
    "query_params": [
      {
        "key": "some_api_account_id",
        "value": "eyJhbGciOiJIUzI1NiJ9.dHJ1ZQ.0hVNE7ES45PA8EnxK6gzAtY-4DfTpGtB0_A2fCW8SuU"
      },
      {
        "key": "some_api_account_secret",
        "value": "eyJhbGciOiJIUzI1NiJ9.dHJ1ZQ.0hVNE7ES45PA8EnxK6gzAtY-4DfTpGtB0_A2fCW8SuU"
      }
    ]
  }
}
```

:::

::::



## Delete Extension
Make sure you include `Authorization: Bearer <ACCESS_TOKEN>` in the header.

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/extensions/:extension_id
```

**Example Response**

```json
{
  "status": "200",
  "message": "Extension deleted."
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.deleteExtension()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'YOUR_ACCOUNT_TOKEN' // required
})
const bucket = Cosmic.bucket({
  slug: 'bucket-slug'
})
bucket.deleteExtension({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d'
})
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
  "status": "200",
  "message": "Extension deleted."
}
```

:::

::::
