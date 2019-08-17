# Extensions

## Add Extension

Adds an Extension to your Bucket. The only required post value is `zip` which is the name of your file sent. Read more about Extensions on the [Extensions documentation page](/docs/extensions).

| Parameter | Required | Type                    | Description                         |
| --------- | -------- | ----------------------- | ----------------------------------- |
| zip       | required | File Object (see below) | Zip object with specific properties |
| write_key |          | String                  | Your Bucket write key               |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/extensions
```

**Example Request**

```json
{
  "zip": "your-media-multipart-form-data",
  "write_key": "your-key-added-in-bucket-settings"
}
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

::: tab Node.js
**Definition**

```js
bucket.addExtension()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})

const zip_object = req.files[0] // Using Multer
// OR:
// const zip_object = { originalname: filename, buffer: filedata } // Not using Multer

bucket
  .addExtension({
    zip: zip_object
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
/*
As an example, another popular upload library for express is [express-fileupload](https://www.npmjs.com/package/express-fileupload). File objects obtained through this have the following properties:
req.files.foo.name: "car.jpg"
req.files.foo.mimetype: The mimetype of your file
req.files.foo.data: A buffer representation of your file
*/

// In order to pass the file `req.files.foo` to Cosmic you would do:
const media_object = {
  originalname: req.files.foo.name,
  buffer: req.files.foo.data
}
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

### File Object

The File Object must be an object with certain properties indicated below. If using the [multer NPM module](https://www.npmjs.com/package/multer) the file objects have these by default. Otherwise you should create an object with these properties:

| Parameter    | Required | Type        | Description                           |
| ------------ | -------- | ----------- | ------------------------------------- |
| originalname | required | String      | The name of your file (something.jpg) |
| buffer       |          | File Buffer | The File Buffer (must be zip file)    |


## Edit Extension

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present. For security, `query_params` values will be saved as JavaScript Web Tokens (JWT), but available in your Extension as a decoded value.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |
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
  "write_key": "your-key-added-in-bucket-settings",
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
COMING SOON

**Definition**

```js
Cosmic.editExtension()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.editExtension({
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



## Delete Extension

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/extensions/:extension_id
```

**Example Request**

```json
{
  "write_key": "your-key-added-in-bucket-settings"
}
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
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
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
