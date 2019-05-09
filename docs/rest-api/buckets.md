# Buckets
Buckets are where you store content for your projects.

## Add Bucket

`title` is the only required property. If no slug is present, the title will be [converted to a slug](https://www.npmjs.com/package/url-slug). See the table below for the other optional properties. The Bucket request matches the `bucket.json` file located in _Your Bucket Dashboard > Import / Export_.

| Parameter     | Required | Type   | Description                                                                                        |
| ------------- | -------- | ------ | -------------------------------------------------------------------------------------------------- |
| title         | required | String | Your Bucket title                                                                                  |
| slug          |          | String | [URL-friendly](https://www.npmjs.com/package/url-slug) unique identifier                           |
| read_key      |          | String | Restrict read access                                                                               |
| write_key     |          | String | Restrict write access                                                                              |
| cluster       |          | String | Add this Bucket to a Cluster. ID of existing Cluster                                               |
| object_types  |          | Array  | Populate your Bucket with Object Types. See [Object Types](/docs/rest-api/object-types.html) for model. |
| objects       |          | Array  | Populate your Bucket with Objects. See [Objects](/docs/rest-api/objects.html) for model.                |
| media         |          | Array  | Populate your Bucket with Media. See [Media](/docs/rest-api/media.html) for model.                      |
| media_folders |          | Array  | Populate your Bucket with Media Folders. See [Media](/docs/rest-api/media.html) for model.              |
| webhooks      |          | Array  | Populate your Bucket with [Webhooks](/docs/webhooks). See [Webhooks](/docs/webhooks) for model.              |
| extensions    |          | Array  | Populate your Bucket with [Extensions]/docs(/extensions). See [Extensions](/docs/extensions) for model.      |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/buckets
```

**Example Request**

```bash
curl -X POST "https://api.cosmicjs.com/v1/buckets" \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json" \
-d '{"title": "My New Bucket"}'
```

**Example Response**

```json
{
  "bucket": {
    "_id": "55b3d557df0fb1df7600004b",
    "slug": "my-new-bucket",
    "title": "My New Bucket"
  }
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.addBucket()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // required
})
Cosmic.addBucket({
  title: 'My New Bucket',
  slug: 'my-new-bucket' // must be unique across all Buckets in system
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
  "bucket": {
    "_id": "55b3d557df0fb1df7600004b",
    "slug": "my-new-bucket",
    "title": "My New Bucket"
  }
}
```

:::

::::

## Get Buckets

Gets all Buckets connected to your account. Your authorization token in the header request is the only required property.

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/buckets
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/buckets" \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json"
# Gets all Buckets connected to your account. Your authorization token in the header request is the only required property.
```

**Example Response**

```json
{
  "buckets": [
    {
      "_id": "5a051c23ae05992b360005e7",
      "slug": "my-first-bucket",
      "title": "My First Bucket",
      "created_at": "2017-11-10T03:25:23.807Z",
      "modified_at": "2017-11-11T17:20:04.322Z"
    },
    {
      "_id": "5a329f6769a130011900000c",
      "slug": "my-second-bucket",
      "title": "My Second Bucket",
      "created_at": "2017-12-14T15:57:27.274Z",
      "modified_at": "2018-01-14T04:06:29.630Z"
    },
    {
      "_id": "5a329f6769a130011900000c",
      "slug": "my-third-bucket",
      "title": "My Third Bucket",
      "created_at": "2017-12-14T15:57:27.274Z",
      "modified_at": "2018-01-14T04:06:29.630Z"
    }
  ]
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.getBuckets()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // optional
})
Cosmic.getBuckets()
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
  "buckets": [
    {
      "_id": "5a051c23ae05992b360005e7",
      "slug": "my-first-bucket",
      "title": "My First Bucket",
      "created_at": "2017-11-10T03:25:23.807Z",
      "modified_at": "2017-11-11T17:20:04.322Z"
    },
    {
      "_id": "5a329f6769a130011900000c",
      "slug": "my-second-bucket",
      "title": "My Second Bucket",
      "created_at": "2017-12-14T15:57:27.274Z",
      "modified_at": "2018-01-14T04:06:29.630Z"
    },
    {
      "_id": "5a329f6769a130011900000c",
      "slug": "my-third-bucket",
      "title": "My Third Bucket",
      "created_at": "2017-12-14T15:57:27.274Z",
      "modified_at": "2018-01-14T04:06:29.630Z"
    }
  ]
}
```

:::

::::

## Connect to Bucket

For the NPM module:

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| slug      | required | String | The Bucket slug       |
| read_key  |          | String | Restrict read access  |
| write_key |          | String | Restrict write access |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site"
```

:::

::: tab Node.js
**Example Request**

```js
// Use the Cosmic.bucket method to connect to different Buckets in your account.
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // optional
})
const bucket = Cosmic.bucket({
  slug: 'my-first-bucket',
  read_key: '',
  write_key: ''
})
const bucket2 = Cosmic.bucket({
  slug: 'my-other-bucket',
  read_key: '',
  write_key: ''
})
```

:::

::::

## Get Bucket

Returns the entire Bucket including Object Types, Objects, Media and more. If you would like to restrict read access to your Bucket, you can do so in Your Bucket > Basic Settings.

| Parameter       | Required | Type   | Description                         |
| --------------- | -------- | ------ | ----------------------------------- |
| hide_metafields |          | Enum   | true, Hides metafields              |
| read_key        |          | String | Restrict read access to your Bucket |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site"
```

:::

::: tab Node.js
**Definition**

```js
bucket.getBucket()
```

**Example Request**

<iframe src="https://runkit.com/e?name=runkit-embed-6&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;readOnly=false&amp;minHeight=&amp;theme=&amp;syntaxTheme=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnd2VkZGluZy1zaXRlJwp9KQpjb25zdCBkYXRhID0gKGF3YWl0IGJ1Y2tldC5nZXRCdWNrZXQoKSkuYnVja2V0&amp;" frameborder="0" name="runkit-embed-6" style="height: 166px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>
:::

::::

## Delete Bucket

::: danger DANGER
Deletes the whole Bucket. **This cannot be undone.**
:::

| Parameter | Required | Type   | Description                                              |
| --------- | -------- | ------ | -------------------------------------------------------- |
| id        | required | String | The Bucket id found as "\_id"                            |
| token     | required | String | You can only delete Buckets that you have created / own. |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/buckets/:bucket_id
```

**Example Request**

```bash
curl -X DELETE "https://api.cosmicjs.com/v1/buckets/:bucket_id" \
-H "Authorization: Bearer <ACCESS_TOKEN>"
```

**Example Response**

```json
{
  "status": "200",
  "message": "Bucket deleted"
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.deleteBucket()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')){
  token: 'your-token-from-auth-request' // required
})
Cosmic.deleteBucket({
  id: 'bucket_id'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "status": "200",
  "message": "Bucket deleted"
}
```

:::

::::

## Import Bucket

::: danger DANGER
The Bucket import method removes all current data: Object Types, Objects and Media and replaces it with new data. **This cannot be undone.**
:::

The Bucket data schema matches the `bucket.json` file located in _Your Bucket Dashboard > Import / Export_.

| Parameter     | Required | Type  | Description                                                                                        |
| ------------- | -------- | ----- | -------------------------------------------------------------------------------------------------- |
| object_types  |          | Array | Populate your Bucket with Object Types. See [Object Types](/rest-api/object-types.html) for model. |
| objects       |          | Array | Populate your Bucket with Objects. See [Objects](/rest-api/objects.html) for model.                |
| media         |          | Array | Populate your Bucket with Media. See [Media](<(/rest-api/media.html)>) for model.                  |
| media_folders |          | Array | Populate your Bucket with Media Folders. See [Media](/rest-api/media.html) for model.              |
| webhooks      |          | Array | Populate your Bucket with Webhooks. See [Webhooks](/docs/webhooks) for model.                           |
| extensions    |          | Array | Populate your Bucket with Extensions. See [Extensions](/docs/extensions) for model.                     |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/buckets/:bucket_id
```

**Example Request**

```bash
curl -X DELETE "https://api.cosmicjs.com/v1/buckets/:bucket_id" \
-H "Authorization: Bearer <ACCESS_TOKEN>"
```

**Example Response**

```json
{
  "status": "200",
  "message": "Bucket deleted"
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.importBucket()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // required
})
const params = {
  "id": "5ace13795a39fb49db87ac95", // Bucket id found in Bucket Settings > Basic Settings
  "bucket": { // import data
    "object_types": [...],
    "objects": [...],
    "media": [...]
  }
}
Cosmic.importBucket(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "bucket": {
    "_id": "5ace13795a39fb49db87ac95",
    "slug": "same-bucket-slug",
    "title": "Same Bucket Title",
    "object_types": [...], // all new Object Types
    "objects": [...], // all new Objects
    "media": [...] // all new Media
  }
}
```

:::

::::