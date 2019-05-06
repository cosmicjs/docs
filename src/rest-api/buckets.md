# Buckets

## Add Bucket

`title` is the only required property. If no slug is present, the title will be [converted to a slug](https://www.npmjs.com/package/url-slug). See the table below for the other optional properties. The Bucket request matches the `bucket.json` file located in _Your Bucket Dashboard > Import / Export_.

| Parameter     | Required | Type   | Description                                                                                   |
| ------------- | -------- | ------ | --------------------------------------------------------------------------------------------- |
| title         | true     | String | Your Bucket title                                                                             |
| slug          |          | String | [URL-friendly](https://www.npmjs.com/package/url-slug) unique identifier                      |
| read_key      |          | String | Restrict read access                                                                          |
| write_key     |          | String | Restrict write access                                                                         |
| cluster       |          | String | Add this Bucket to a Cluster. ID of existing Cluster                                          |
| object_types  |          | Array  | Populate your Bucket with Object Types. See Object Types for model.                           |
| objects       |          | Array  | Populate your Bucket with Objects. See Objects for model.                                     |
| media         |          | Array  | Populate your Bucket with Media. See Media for model.                                         |
| media_folders |          | Array  | Populate your Bucket with Media Folders. See Media for model.                                 |
| webhooks      |          | Array  | Populate your Bucket with [Webhooks](/webhooks). See [Webhooks](/webhooks) for model.         |
| extensions    |          | Array  | Populate your Bucket with [Extensions](/extensions). See [Extensions](/extensions) for model. |

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
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


::: tab javascript
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
}).catch(err => {
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

### Get Buckets

Gets all Buckets connected to your account. Your authorization token in the header request is the only required property.

#### Definition

```
GET https://api.cosmicjs.com/v1/buckets
```

#### Example Request

```bash
curl "https://api.cosmicjs.com/v1/buckets" \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json"
Gets all Buckets connected to your account. Your authorization token in the header request is the only required property.
```

#### Example Response

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

### Connect to Bucket

For the NPM module:

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| slug      | true     | String | The Bucket slug       |
| read_key  |          | String | Restrict read access  |
| write_key |          | String | Restrict write access |

#### Example Request

```bash
curl "https://api.cosmicjs.com/v1/wedding-site"
```

### Get Bucket

Returns the entire Bucket including Object Types, Objects, Media and more. If you would like to restrict read access to your Bucket, you can do so in Your Bucket > Basic Settings.

| Parameter       | Required | Type   | Description                         |
| --------------- | -------- | ------ | ----------------------------------- |
| hide_metafields |          | Enum   | true, Hides metafields              |
| read_key        |          | String | Restrict read access to your Bucket |

#### Definition

```
GET https://api.cosmicjs.com/v1/:bucket_slug
```

#### Example Request

```
curl "https://api.cosmicjs.com/v1/wedding-site"
```

<iframe src="https://runkit.com/e?name=runkit-embed-6&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;readOnly=false&amp;minHeight=&amp;theme=&amp;syntaxTheme=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnd2VkZGluZy1zaXRlJwp9KQpjb25zdCBkYXRhID0gKGF3YWl0IGJ1Y2tldC5nZXRCdWNrZXQoKSkuYnVja2V0&amp;" frameborder="0" name="runkit-embed-6" style="height: 166px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>

### Delete Bucket

Deletes the whole Bucket.

::: danger DANGER
This cannot be undone.
:::

| Parameter | Required | Type   | Description                                              |
| --------- | -------- | ------ | -------------------------------------------------------- |
| id        | true     | String | The Bucket id found as "\_id"                            |
| token     | true     | String | You can only delete Buckets that you have created / own. |

### Import Bucket

The Bucket import method removes all current data: Object Types, Objects and Media and replaces it with new data.

::: danger DANGER!
This cannot be undone.
:::

The Bucket data schema matches the `bucket.json` file located in _Your Bucket Dashboard > Import / Export_.

| Parameter     | Required | Type  | Description                                                         |
| ------------- | -------- | ----- | ------------------------------------------------------------------- |
| object_types  |          | Array | Populate your Bucket with Object Types. See Object Types for model. |
| objects       |          | Array | Populate your Bucket with Objects. See Objects for model.           |
| media         |          | Array | Populate your Bucket with Media. See Media for model.               |
| media_folders |          | Array | Populate your Bucket with Media Folders. See Media for model.       |
| webhooks      |          | Array | Populate your Bucket with Webhooks. See Webhooks for model.         |
| extensions    |          | Array | Populate your Bucket with Extensions. See Extensions for model.     |

### Deploy App

The Bucket deploy App action replaces the currently deployed App connected to this Bucket (if one exists).

| Parameter   | Required | Type   | Description                                                         |
| ----------- | -------- | ------ | ------------------------------------------------------------------- |
| repo_url    |          | String | Link to public (or private, if GitHub account connected) repository |
| repo_branch |          | String | Repo branch to deploy. Defaults to `master` if none specified.      |
