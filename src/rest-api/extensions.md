# Extensions

## Add Extension

Adds an Extension to your Bucket. The only required post value is `zip` which is the name of your file sent. Read more about Extensions on the [Extensions documentation page](/extensions).

| Parameter | Required | Type                    | Description                         |
| --------- | -------- | ----------------------- | ----------------------------------- |
| zip       | required | File Object (see below) | Zip object with specific properties |
| write_key |          | String                  | Your Bucket write key               |

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
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

::: tab javascript
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

## Delete an Extension

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
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

::: tab javascript
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
bucket
	.deleteExtension({
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
