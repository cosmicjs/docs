# Objects

The following endpoints allow you to add, edit and delete Objects in your Bucket. If you would like to restrict read or write access to your Bucket, you can do so in Your Bucket > Basic Settings.

### Add Object

Add a new Object to your Bucket.

| Parameter              | Required | Type   | Description                                                        |
| ---------------------- | -------- | ------ | ------------------------------------------------------------------ |
| type_slug              | required | String | Add Object to Object Type                                          |
| title                  | required | String | Your Object title                                                  |
| slug                   |          | String | Unique identifier for your Object                                  |
| content                |          | String | Add Content to your Object                                         |
| status                 |          | Enum   | draft, published, defaults to published                            |
| options.slug_field     |          | Bool   | Set to false to hide the slug field                                |
| options.content_editor |          | Bool   | Set to false to hide the content editor                            |
| metafields             |          | Array  | Add Metafields to your Object. See Metafields Model.               |
| locale                 |          | String | Add localization to the Object                                     |
| write_key              |          | String | Your Bucket write key                                              |
| publish_at             |          | Number | UNIX millisecond timestamp. Publish automatically at a later time. |

### Get Objects

Returns Objects from your Bucket.

| Parameter             | Required | Type   | Description                                                     |
| --------------------- | -------- | ------ | --------------------------------------------------------------- |
| type                  |          | String | The Object Type slug                                            |
| limit                 |          | Number | The number of Objects to return                                 |
| skip                  |          | Number | The number of Objects to skip                                   |
| status                |          | Enum   | all, Return published and draft status Objects                  |
| hide_metafields       |          | Enum   | true, Hides metafields                                          |
| sort                  |          | Enum   | created_at, -created_at, modified_at, -modified_at, random      |
| locale                |          | String | Filter by locale                                                |
| q                     |          | String | Searches title and content properties for this string           |
| metafield_key         |          | String | Metafield key to search for                                     |
| metafield_value       |          | String | Metafield contains value                                        |
| metafield_object_id   |          | String | Object Metafield Object ID (stored as Metafield value)          |
| filters[_id]          |          | String | Filter by Object IDs (comma separated for multiple)             |
| filters[connected_to] |          | String | Returns Objects that reference the specified Object ID (String) |
| pretty                |          | Enum   | true, Makes the response more reader-friendly                   |
| read_key              |          | String | Your Bucket read key                                            |

#### Get Objects by Type

Get Objects from an Object Type using getObject method and the type param (the method getObjectsByType is now deprecated).

#### Search and Filter Objects

Get Objects based on search variables. (the method searchObjectType is now deprecated)

### Get Object

Returns a single Object from your Bucket.

| Parameter       | Required | Type   | Description                                    |
| --------------- | -------- | ------ | ---------------------------------------------- |
| slug            | required | String | Unique identifier for your Object              |
| status          |          | Enum   | all, Return published and draft status Objects |
| revision        |          | String | The revision_id of the Object Revision         |
| hide_metafields |          | Enum   | true, Hides metafields                         |
| locale          |          | String | Filter by locale                               |
| pretty          |          | Enum   | true, Makes the response more reader-friendly  |
| read_key        |          | String | Your Bucket read key                           |

### Edit Object

Edit an existing Object in your Bucket.

| Parameter              | Required | Type   | Description                                                        |
| ---------------------- | -------- | ------ | ------------------------------------------------------------------ |
| slug                   | required | String | Unique identifier for your Object                                  |
| type_slug              |          | String | Object Type                                                        |
| title                  |          | String | Your Bucket title                                                  |
| content                |          | String | Add Content to your Object                                         |
| status                 |          | Enum   | draft, published, defaults to published                            |
| options.slug_field     |          | Bool   | Set to false to hide the slug field                                |
| options.content_editor |          | Bool   | Set to false to hide the content editor                            |
| metafields             |          | Array  | Add Metafields to your Object. See Metafields Model.               |
| locale                 |          | String | Edit Object locale                                                 |
| write_key              |          | String | Your Bucket write key                                              |
| publish_at             |          | Number | UNIX millisecond timestamp. Publish automatically at a later time. |

### Delete Object

Delete an existing Object in your Bucket.

| Parameter | Required | Type   | Description                       |
| --------- | -------- | ------ | --------------------------------- |
| slug      | required | String | Unique identifier for your Object |
| write_key |          | String | Your Bucket write key             |
