# Object Types

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