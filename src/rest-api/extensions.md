# Extensions

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
