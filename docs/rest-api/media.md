# Media

## Add Media

The only required post value is the `media` object. You can also add optional `folder` and `metadata` params.

| Parameter | Required | Type                     | Description                           |
| --------- | -------- | ------------------------ | ------------------------------------- |
| media     | required | Media Object (see below) | Media object with specific properties |
| folder    |          | String                   | Media folder slug                     |
| metadata  |          | Object                   | Key / value data store                |
| write_key |          | String                   | Your Bucket write key                 |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/media
```

**Example Request**

```json
{
  "media": "your-media-object",
  "folder": "your-folder-slug",
  "metadata": {
    "caption": "Beautiful picture of the beach",
    "credit": "Tyler Jackson"
  }
}
```

**Example Response**

```json
{
  "media": {
    "name": "c20391e0-b8a4-11e6-8836-fbdfd6956b31-bird.jpg",
    "original_name": "bird.jpg",
    "size": 457307,
    "type": "image/jpeg",
    "bucket": "5839c67f0d3201c114000004",
    "created": "2016-12-02T15:34:05.054Z",
    "location": "https://cosmicjs.com/uploads",
    "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/c20391e0-b8a4-11e6-8836-fbdfd6956b31-bird.jpg",
    "imgix_url": "https://cosmic-s3.imgix.net/c20391e0-b8a4-11e6-8836-fbdfd6956b31-bird.jpg",
    "metadata": [
      {
        "key": "caption",
        "value": "Beautiful picture of the beach"
      },
      {
        "key": "credit",
        "value": "Tyler Jackson"
      }
    ]
  }
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.addMedia()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})

const media_object = req.files[0] // Using Multer
// OR:
// const media_object = { originalname: filename, buffer: filedata } // Not using Multer

bucket.addMedia({
  media: media_object,
  folder: 'your-folder-slug',
  metadata: {
    caption: 'Beautiful picture of the beach',
    credit: 'Tyler Jackson'
  }
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
  "media": {
    "name": "c20391e0-b8a4-11e6-8836-fbdfd6956b31-bird.jpg",
    "original_name": "bird.jpg",
    "size": 457307,
    "type": "image/jpeg",
    "bucket": "5839c67f0d3201c114000004",
    "created": "2016-12-02T15:34:05.054Z",
    "location": "https://cosmicjs.com/uploads",
    "url": "https://s3-us-west-2.amazonaws.com/cosmicjs/c20391e0-b8a4-11e6-8836-fbdfd6956b31-bird.jpg",
    "imgix_url": "https://cosmic-s3.imgix.net/c20391e0-b8a4-11e6-8836-fbdfd6956b31-bird.jpg",
    "metadata": [
      {
        "key": "caption",
        "value": "Beautiful picture of the beach"
      },
      {
        "key": "credit",
        "value": "Tyler Jackson"
      }
    ]
  }
}
```

:::

::::

### Media Object

The Media Object must be an object with certain properties indicated below. If using the [multer NPM module](https://www.npmjs.com/package/multer) the file objects have these by default. Otherwise you should create an object with these properties:

| Parameter    | Required | Type        | Description                           |
| ------------ | -------- | ----------- | ------------------------------------- |
| originalname | required | String      | The name of your file (something.jpg) |
| buffer       |          | File Buffer | The File Buffer (must be zip file)    |

## Get Media

You can add the folder parameter to get Media from a certain folder.

| Parameter | Required | Type   | Description          |
| --------- | -------- | ------ | -------------------- |
| pretty    |          | File   | Media object         |
| folder    |          | String | Media folder slug    |
| read_key  |          | String | Your Bucket read key |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/media
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site/media?pretty=true&folder=groomsmen&limit=3"
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.getMedia()
```

**Example Request**

<iframe src="https://runkit.com/e?name=runkit-embed-5&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;minHeight=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnd2VkZGluZy1zaXRlJywKICByZWFkX2tleTogJycKfSkKY29uc3QgZGF0YSA9IChhd2FpdCBidWNrZXQuZ2V0TWVkaWEoewogIGZvbGRlcjogJ2dyb29tc21lbicsCiAgbGltaXQ6IDMKfSkpLm1lZGlh" frameborder="0" name="runkit-embed-5" style="height: 250px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>
:::

::::


### Imgix

[Imgix](https://imgix.com/) is included with every account. You can use the Imgix suite of image processing tools on the URL provided by the `imgix_url` property value. Check out the [Imgix documentation](https://docs.imgix.com/) for more info.

## Delete Media

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/media/:media_id
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
  "message": "Object Type deleted."
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.deleteMedia()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.deleteMedia({
  id: '5a4b18e12fff7ec0e3c13c65'
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
  "message": "Object Type deleted."
}
```

:::

::::
