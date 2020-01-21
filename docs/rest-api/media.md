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
```bash
curl --form "folder=folder-name" --form "media=@test.png" --form "write_key=<write-key>" 'https://api.cosmicjs.com/v1/:bucket_slug/media'
```

**Example Response**

```json
{
  "media": {
    "name": "c20391e0-b8a4-11e6-8836-fbdfd6956b31-test.png",
    "original_name": "test.png",
    "size": 457307,
    "folder": "folder-name",
    "type": "image/png",
    "bucket": "5839c67f0d3201c114000004",
    "created": "2016-12-02T15:34:05.054Z",
    "location": "https://cosmicjs.com/uploads",
    "url": "https://cdn.cosmicjs.com/c20391e0-b8a4-11e6-8836-fbdfd6956b31-test.png",
    "imgix_url": "https://cosmic-s3.imgix.net/c20391e0-b8a4-11e6-8836-fbdfd6956b31-test.png"
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
    "url": "https://cdn.cosmicjs.com/c20391e0-b8a4-11e6-8836-fbdfd6956b31-bird.jpg",
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

### Server-side Multer Example

This application uses Express and Multer to create a route `POST http://localhost:5000/upload` that will upload a file to your Bucket Media area. This is an example from the article [Upload Media to Your Cosmic JS Bucket Using Multer](https://www.cosmicjs.com/articles/upload-media-to-your-cosmic-js-bucket-using-multer-jzoddl9p).

```js
// index.js
const fs = require('fs')
const Cosmic = require('cosmicjs')()
const multer = require('multer')
const express = require('express')
var app = express()
const bucket = Cosmic.bucket({
  slug: 'your-bucket-slug',
  write_key: 'your-bucket-write-key'
})
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })
app.post('/upload', upload.single('file'), async function(req, res) {
  try {
    const media_object = {
      originalname: req.file.originalname,
      buffer: fs.createReadStream(req.file.path)
    }
    const response = await bucket.addMedia({ media: media_object });
    return res.json(response);
  } catch (e) {
    console.log(e)
  }
});
app.listen(5000);

```

### Media Object

The Media Object must be an object with certain properties indicated below. If using the [multer NPM module](https://www.npmjs.com/package/multer) the file objects have these by default. Otherwise you should create an object with these properties:

| Parameter    | Required | Type        | Description                           |
| ------------ | -------- | ----------- | ------------------------------------- |
| originalname | required | String      | The name of your file (something.jpg) |
| buffer       |          | File Buffer | The File Buffer    |

### Client-side React Dropzone Example
React Dropzone is a popular file uploader on the client-side. For implmentation, read the [React Dropzone docs on GitHub](https://github.com/react-dropzone/react-dropzone/).

::: tip TIP
To use the following example, get your Bucket slug and keys located in Bucket > Settings in your [Bucket Dashboard ](https://app.cosmicjs.com/login).
:::

[View full screen / fork on StackBlitz ](https://stackblitz.com/edit/react-dropzone-cosmic)

<iframe src="https://stackblitz.com/edit/react-dropzone-cosmic?embed=1&file=index.js" width="100%" height="500" frameborder="0"></iframe>


## Get Media

Get Media from your Bucket. You can add the folder parameter to get Media from a certain folder.

::: tip TIP
For a quick reference to this endpoint click the "Developer Tools" button on your Media table view in your [Bucket Dashboard ](https://app.cosmicjs.com/login).

<img src="https://cdn.cosmicjs.com/6647c4e0-3c93-11ea-93e2-f96724e61d4d-dev-tools-btn.png" width="170"/>
:::

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
  "write_key": "your-write-key-found-in-bucket-settings"
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
