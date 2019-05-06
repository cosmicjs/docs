# REST API

## Introduction

The Cosmic JS REST API helps you easily manage data and files for websites and applications. We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application (though you should never expose your private keys or credentials in any public website's client-side code). JSON is returned by all API responses, including errors.

Some code samples are runnable using [Runkit](https://runkit.com/home).

```
# API Endpoint
https://api.cosmicjs.com
```

## Getting Started

Go to [https://cosmicjs.com/signup](https://cosmicjs.com/signup) to create an account and get familiar with the Cosmic JS Dashboard.

### Terms

These docs assume you understand the core concepts of Cosmic JS including Buckets, Object Types and Objects. For a brief overview of these terms, see the [Getting Started guide](https://cosmicjs.com/getting-started).

## Errors

The Cosmic JS API uses the following error codes:

| Error Code         | Meaning                                                              |
| ------------------ | -------------------------------------------------------------------- |
| 200                | OK - Everything worked as expected.                                  |
| 400                | Bad Request - Your request is invalid.                               |
| 401                | Unauthorized - Your access key is incorrect.                         |
| 402                | Payment Required - Your Bucket needs to be upgraded to continue use. |
| 403                | Forbidden - You are not allowed to access this content.              |
| 404                | Not Found - The requested resource doesn't exist.                    |
| 429                | Too Many Requests - Too many requests hit the API too quickly.       |
| 500, 502, 503, 504 | Internal Server Error - Something went wrong on our end.             |

## Authentication

Send your `email` and `password` to receive your access token. Your access token will be used to add Buckets to your account as well as other account-related access. **You do not need to use the token to access your Bucket. Your Bucket has its own read and write keys for restricted access.**

| Parameter | Required | Type   | Description                   |
| --------- | -------- | ------ | ----------------------------- |
| email     | true     | String | Your Cosmic JS login email    |
| password  | true     | String | Your Cosmic JS login password |

### Definition

```
POST https://api.cosmicjs.com/v1/authenticate
```

### Example Request

```bash
# With shell, you can just pass your email and password
curl -X POST "https://api.cosmicjs.com/v1/authenticate" \
-d "email=you@youremail.com" \
-d "password=yourpassword"
```

### Example Response

```json
{
	"success": true,
	"message": "Token created successfully.",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV.eyJlbWFpbCI6InNwaXJvbnl..."
}
```

## Buckets

### Add Bucket

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

#### Definition

```
POST https://api.cosmicjs.com/v1/buckets
```

#### Example Request

```bash
curl -X POST "https://api.cosmicjs.com/v1/buckets" \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json" \
-d '{"title": "My New Bucket"}'
```

#### Example Response

```json
{
	"bucket": {
		"_id": "55b3d557df0fb1df7600004b",
		"slug": "my-new-bucket",
		"title": "My New Bucket"
	}
}
```

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

## Users

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

## Object Types

### Add Object Type

Add a new Object Type to your Bucket.

| Parameter  | Required | Type                                            | Description |
| ---------- | -------- | ----------------------------------------------- | ----------- |
| title      | required | Plural title of your Object Type                |
| slug       |          | Plural slug of your Object Type                 |
| singular   |          | Singular title of your Object Type              |
| metafields | Array    | Default Metafields for each Object in this type |
| pretty     | Enum     | true, Makes the response more reader-friendly   |
| write_key  |          | Restrict write access to your Bucket            |

### Get Object Types

Get all Object Types in your Bucket.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|pretty|		|Enum|	true, Makes the response more reader-friendly|
|read_key|		|String|	Restrict read access to your Bucket|

### Edit Object Type

Edit an existing Object Type in your Bucket.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|slug	|required|	String|	Plural slug of your Object Type|
|title|		|String|	Singular title of your Object Type|
|metafields	||	Array	|Default Metafields for each Object in this type|
|write_key|	|	String|	Restrict write access to your Bucket|

### Delete Object Type

Delete an existing Object Type from your Bucket. * This does not delete Objects in this Object Type.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|write_key|		|String|	Restrict write access to your Bucket|

## Objects

The following endpoints allow you to add, edit and delete Objects in your Bucket. If you would like to restrict read or write access to your Bucket, you can do so in Your Bucket > Basic Settings.

### Add Object

Add a new Object to your Bucket.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
| type_slug	|required|	String|	Add Object to Object Type|
| title	|required|	String|	Your Object title|
| slug|		|String|	Unique identifier for your Object|
| content|		|String|	Add Content to your Object|
| status|		|Enum|	draft, published, defaults to published|
| options.slug_field|		|Bool|	Set to false to hide the slug field|
| options.content_editor|		|Bool|	Set to false to hide the content editor|
| metafields|		|Array|	Add Metafields to your Object. See Metafields Model.|
| locale|		|String|	Add localization to the Object|
| write_key|		|String|	Your Bucket write key|
| publish_at|		|Number|	UNIX millisecond timestamp. Publish automatically at a later time.|

### Get Objects

Returns Objects from your Bucket.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|type| |		String|	The Object Type slug|
|limit| |		Number|	The number of Objects to return|
|skip| |		Number|	The number of Objects to skip|
|status| |		Enum|	all, Return published and draft status Objects|
|hide_metafields| |		Enum|	true, Hides metafields|
|sort| |		Enum|	created_at, -created_at, modified_at, -modified_at, random |
|locale| |		String|	Filter by locale|
|q| |		String|	Searches title and content properties for this string|
|metafield_key| |		String|	Metafield key to search for|
|metafield_value| |		String|	Metafield contains value|
|metafield_object_id| |		String|	Object Metafield Object ID (stored as Metafield value)|
|filters[_id]| |		String|	Filter by Object IDs (comma separated for multiple)|
|filters[connected_to]	| |	String|	Returns Objects that reference the specified Object ID (String)|
|pretty| |		Enum|	true, Makes the response more reader-friendly|
|read_key| |		String	|Your Bucket read key|

#### Get Objects by Type

Get Objects from an Object Type using getObject method and the type param (the method getObjectsByType is now deprecated).

#### Search and Filter Objects

Get Objects based on search variables. (the method searchObjectType is now deprecated)

### Get Object

Returns a single Object from your Bucket.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|slug	|required	|String	|Unique identifier for your Object|
|status	|	|Enum|	all, Return published and draft status Objects|
|revision	|	|String|	The revision_id of the Object Revision|
|hide_metafields|	|	Enum|	true, Hides metafields|
|locale|		|String|	Filter by locale|
|pretty	|	|Enum|	true, Makes the response more reader-friendly|
|read_key	|	|String|	Your Bucket read key|

### Edit Object

Edit an existing Object in your Bucket.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|slug	|required|	String|	Unique identifier for your Object|
|type_slug| |		String|	Object Type|
|title| |		String|	Your Bucket title|
|content| |		String|	Add Content to your Object|
|status| |		Enum	|draft, published, defaults to published|
|options.slug_field| |		Bool	|Set to false to hide the slug field|
|options.content_editor| |		Bool|	Set to false to hide the content editor|
|metafields	| |	Array|	Add Metafields to your Object. See Metafields Model.|
|locale| |		String|	Edit Object locale|
|write_key| |		String|	Your Bucket write key|
|publish_at| |		Number	|UNIX millisecond timestamp. Publish automatically at a later time.|

### Delete Object

Delete an existing Object in your Bucket.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|slug|	required|	String|	Unique identifier for your Object|
|write_key	|	|String|	Your Bucket write key|

## Metafields

Metafields are powerful components that can be added to Objects and Object Types. Metafields added to Object Types will be default for all new Objects in the type.

### Model

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|type|	required|	Enum|	text, textarea, html-textarea, select-dropdown, object, objects, file, date, radio-buttons, check-boxes, repeater, parent, markdown, json|
|title|	required|	String|	Your Metafield title|
|key|	required|	String|	Unique identifier for your Metafield|
|value|	|	String|	Metafield value|
|required|	|	Bool|	A value is required|
|regex|	|	String|	Restrict the value to match a regular expresssion|
|regex_message|	|	Array|	The message displayed when the value fails the regex|
|minlength|	|	Number|	Add minlength to text or textarea Metafields|
|maxlength|		|Number|	Add maxlength to text or textarea Metafields|
|children|	|	Array|	Add nested Metafields|

### Validation

You can use optional validation parameters to make sure editors using the Web Dashboard enter the correct values.

Reference the [Metafield model](https://cosmicjs.github.io/rest-api-docs/?javascript#model) to learn more.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|required	|	|Bool|	A value is required|
|regex|		|String|	Restrict the value to match a regular expresssion|
|regex_message|		|Array|	The message displayed when the value fails the regex|
|minlength|		|Number|	Add minlength to text or textarea Metafields|
|maxlength|		|Number|	Add maxlength to text or textarea Metafields|

### Connect Objects

You can connect Objects to create "one to many" and "many to many" relationships between Objects using Single and Multiple Object Metafields.

#### Single Objects

For a Single Object Metafield, add the Object ID (`_id`) to the value to connect the Object. The full Object will be returned on the Metadata response in the `object` property.

#### Multiple Objects

For Multiple Object type Metafields, you can add the Object IDs as comma-separated values. The full Objects will be returned on the Metadata response in the `objects` property.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|type|	required|	Enum|	object, objects|
|title|	required|	String|	Your Metafield title|
|key	|required|	String|	Unique identifier for your Metafield|
|object_type	|required|	String|	Object Type slug|
|value	|	|String|	For single Object this is the _id property. For multiple Objects it is comma-separated _ids.|

## Media

### Add Media

The only required post value is the `media` object. You can also add optional `folder` and `metadata` params.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|media|	required|	Media Object (see below)|	Media object with specific properties|
|folder|		|String|	Media folder slug|
|metadata|		|Object|	Key / value data store|
|write_key	|	|String|	Your Bucket write key|


#### Media Object

The Media Object must be an object with certain properties indicated below. If using the [multer NPM module](https://www.npmjs.com/package/multer) the file objects have these by default. Otherwise you should create an object with these properties:

| Parameter    | Required | Type        | Description                           |
| ------------ | -------- | ----------- | ------------------------------------- |
| originalname | required | String      | The name of your file (something.jpg) |
| buffer       |          | File Buffer | The File Buffer (must be zip file)    |

### Get Media

You can add the folder parameter to get Media from a certain folder.

#### Imgix

[Imgix](https://imgix.com/) is included with every account. You can use the Imgix suite of image processing tools on the URL provided by the `imgix_url` property value. Check out the [Imgix documentation](https://docs.imgix.com/) for more info.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|pretty|		|File|	Media object|
|folder|		|String|	Media folder slug|
|read_key|		|String|	Your Bucket read key|

### Delete Media

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |

## Webhooks

### Add Webhook

Sends a POST request to the endpoint of your choice when the event occurs. The data payload in the same fomat as Object and Media. Read more about Webhooks including the payload sent to the endpoint on the [Webhooks documentation page](/webhooks).

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|event|	required|	Enum|	object.created.draft, object.created.published, object.edited.draft, object.edited.published, object.deleted, media.created, media.edited, media.deleted |
|endpoint|	required|	String	|The endpoint that will receive the data|
|write_key	|	|String|	Your Bucket write key|

### Delete a Webhook

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
| write_key | | String | Your Bucket write key |

## Extensions

### Add Extension

Adds an Extension to your Bucket. The only required post value is `zip` which is the name of your file sent. Read more about Extensions on the [Extensions documentation page](/extensions).

| Parameter | Required | Type                    | Description                         |
| --------- | -------- | ----------------------- | ----------------------------------- |
| zip       | required | File Object (see below) | Zip object with specific properties |
| write_key |          | String                  | Your Bucket write key               |

#### File Object

The File Object must be an object with certain properties indicated below. If using the [multer NPM module](https://www.npmjs.com/package/multer) the file objects have these by default. Otherwise you should create an object with these properties:

| Parameter    | Required | Type        | Description                           |
| ------------ | -------- | ----------- | ------------------------------------- |
| originalname | required | String      | The name of your file (something.jpg) |
| buffer       |          | File Buffer | The File Buffer (must be zip file)    |

### Delete an Extension

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |
