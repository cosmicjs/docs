# Media

### Add Media

The only required post value is the `media` object. You can also add optional `folder` and `metadata` params.

| Parameter | Required | Type                     | Description                           |
| --------- | -------- | ------------------------ | ------------------------------------- |
| media     | required | Media Object (see below) | Media object with specific properties |
| folder    |          | String                   | Media folder slug                     |
| metadata  |          | Object                   | Key / value data store                |
| write_key |          | String                   | Your Bucket write key                 |

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

| Parameter | Required | Type   | Description          |
| --------- | -------- | ------ | -------------------- |
| pretty    |          | File   | Media object         |
| folder    |          | String | Media folder slug    |
| read_key  |          | String | Your Bucket read key |

### Delete Media

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |
