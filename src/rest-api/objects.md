---
sidebarDepth: 1
---

# Objects

The following endpoints allow you to add, edit and delete Objects in your Bucket. If you would like to restrict read or write access to your Bucket, you can do so in Your Bucket > Basic Settings.

## Add Object

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

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/add-object
```

**Example Request**

```json
{
  "title": "Cosmic JS Example",
  "type_slug": "examples",
  "content": "Learning the Cosmic JS API is really fun and so easy",
  "metafields": [
    {
      "key": "Headline",
      "type": "text",
      "value": "Learn Cosmic JS!"
    },
    {
      "key": "Author",
      "type": "text",
      "value": "Quasar Jones"
    }
  ],
  "options": {
    "slug_field": false
  }
}
```

**Example Response**

```json
{
  "object": {
    "slug": "cosmic-js-example",
    "title": "Cosmic JS Example",
    "content": "Learning the Cosmic JS API is really fun and so easy",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "type": "text",
        "value": "Learn Cosmic JS!"
      },
      {
        "title": "Author",
        "key": "author",
        "type": "text",
        "value": "Quasar Jones"
      }
    ],
    "bucket": "568c5bbefd0dce302c000001",
    "type_slug": "examples",
    "created_at": "2016-01-06T00:28:39.982Z",
    "_id": "568c5fb72f0c5d532d000001",
    "options": {
      "slug_field": false
    }
  }
}
```
:::


::: tab javascript
**Definition**

```js
bucket.addObject()
```

**Example Request**

```js
const params = {
  "title": "Cosmic JS Example",
  "type_slug": "examples",
  "content": "Learning the Cosmic JS API is really fun and so easy",
  "metafields": [
    {
      "key": "Headline",
      "type": "text",
      "value": "Learn Cosmic JS!"
    },
    {
      "key": "Author",
      "type": "text",
      "value": "Quasar Jones"
    }
  ],
  "options": {
    "slug_field": false
  }
}
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.addObject(params).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "object": {
    "slug": "cosmic-js-example",
    "title": "Cosmic JS Example",
    "content": "Learning the Cosmic JS API is really fun and so easy",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "type": "text",
        "value": "Learn Cosmic JS!"
      },
      {
        "title": "Author",
        "key": "author",
        "type": "text",
        "value": "Quasar Jones"
      }
    ],
    "bucket": "568c5bbefd0dce302c000001",
    "type_slug": "examples",
    "created_at": "2016-01-06T00:28:39.982Z",
    "_id": "568c5fb72f0c5d532d000001",
    "options": {
      "slug_field": false
    }
  }
}
```
:::

::::

## Get Objects

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
:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
**Definition**

```
GET https://api.cosmicjs.com/:bucket_slug/objects
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site/objects?pretty=true&hide_metafields=true&limit=2"
```
:::


::: tab javascript
**Definition**

```js
bucket.getObjects()
```

**Example Request**

<iframe src="https://runkit.com/e?name=runkit-embed-1&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;minHeight=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnd2VkZGluZy1zaXRlJywKfSkKLy8gR2V0IGFsbCBPYmplY3RzIGZyb20gYSBCdWNrZXQKY29uc3QgZGF0YSA9IChhd2FpdCBidWNrZXQuZ2V0T2JqZWN0cygpKS5vYmplY3Rz" frameborder="0" name="runkit-embed-1" style="height: 187px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>
:::

::::

### Get Objects by Type

Get Objects from an Object Type using getObject method and the type param (the method getObjectsByType is now deprecated).

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site/objects?type=groomsmen&limit=3"
```
:::


::: tab javascript

:::
**Definition**

```js
bucket.getObjects({
  // params
})
```

**Example Request**

<iframe src="https://runkit.com/e?name=runkit-embed-2&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;minHeight=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnd2VkZGluZy1zaXRlJywKfSkKLy8gU3BlY2lmeSBhbiBPYmplY3QgVHlwZQpjb25zdCBkYXRhID0gKGF3YWl0IGJ1Y2tldC5nZXRPYmplY3RzKHsKICB0eXBlOiAnZ3Jvb21zbWVuJywKICBsaW1pdDogMwp9KSkub2JqZWN0cw%3D%3D" frameborder="0" name="runkit-embed-2" style="height: 250px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>
::::

### Search and Filter Objects

Get Objects based on search variables. (the method searchObjectType is now deprecated)

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&q=:search_text
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&metafield_key=:metafield_key_text&metafield_value=:metafield_value_text
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&filters[_id]=:object_id_1,:object_id_2
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site/objects?type=groomsmen&metafield_key=official-title&metafield_value=Best%20Man"
```
:::


::: tab javascript
**Definition**

```js
bucket.getObjects({
  // params
})
```

**Example Request**

<iframe src="https://runkit.com/e?name=runkit-embed-3&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;minHeight=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnd2VkZGluZy1zaXRlJwp9KQoKLy8gU2VhcmNoIE9iamVjdHMgCmNvbnN0IHNlYXJjaCA9IChhd2FpdCBidWNrZXQuZ2V0T2JqZWN0cyh7CiAgdHlwZTogJ2dyb29tc21lbicsCiAgbWV0YWZpZWxkX2tleTogJ29mZmljaWFsLXRpdGxlJywKICBtZXRhZmllbGRfdmFsdWU6ICdCZXN0IE1hbicKfSkpLm9iamVjdHMKY29uc29sZS5sb2coc2VhcmNoKQoKLy8gRmlsdGVyIE9iamVjdHMgCmNvbnN0IGZpbHRlciA9IChhd2FpdCBidWNrZXQuZ2V0T2JqZWN0cyh7CiAgdHlwZTogJ2dyb29tc21lbicsCiAgZmlsdGVyczogewogICAgX2lkOiAnNTViM2RhNzc0MGQ3YTM3OTFiMDAwMDA5LDU1YjNkYTc3NDBkN2EzNzkxYjAwMDAwYScKICB9Cn0pKS5vYmplY3RzCmNvbnNvbGUubG9nKGZpbHRlcik%3D" frameborder="0" name="runkit-embed-3" style="height: 502px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>
:::

::::

## Get Object

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

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
**Definition**

```
GET https://api.cosmicjs.com/:bucket_slug/object/:slug
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site/object/registry"
```
:::


::: tab javascript
**Definition**

```js
bucket.getObject()
```

**Example Request**

<iframe src="https://runkit.com/e?name=runkit-embed-4&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;minHeight=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnd2VkZGluZy1zaXRlJwp9KQpjb25zdCBkYXRhID0gKGF3YWl0IGJ1Y2tldC5nZXRPYmplY3QoewogIHNsdWc6ICdyZWdpc3RyeScKfSkpLm9iamVjdA%3D%3D" frameborder="0" name="runkit-embed-4" style="height: 208px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>
:::

::::

## Edit Object

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

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
**Definition**

```
PUT https://api.cosmicjs.com/v1/:bucket_slug/edit-object
```

**Example Request**

```json
{
  "slug": "cosmic-js-example",
  "title": "New Title Edit",
  "content": "This is some rad test content...",
  "metafields": [
    {
      "title": "Headline",
      "key": "headline",
      "value": "Something Big is Coming",
      "type": "text"
    },
    {
      "title": "Subheadline",
      "key": "subheadline",
      "value": "I bet you want to know what it is...",
      "type": "text"
    }
  ]
}
```

**Example Response**

```json
{
  "object": {
    "_id": "568c5fb72f0c5d532d000001",
    "slug": "cosmic-js-example",
    "title": "New Title Edit",
    "content": "This is some rad test content...",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "value": "Something Big is Coming",
        "type": "text"
      },
      {
        "title": "Subheadline",
        "key": "subheadline",
        "value": "I bet you want to know what it is...",
        "type": "text"
      }
    ],
    "bucket": "568c5bbefd0dce302c000001",
    "type_slug": "examples",
    "created": "2016-01-06T00:28:39.982Z"
  }
}
```
:::


::: tab javascript
**Definition**

```js
bucket.editObject()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.editObject({
  slug: 'cosmic-js-example',
  title: 'New Title Edit'
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "object": {
    "_id": "568c5fb72f0c5d532d000001",
    "slug": "cosmic-js-example",
    "title": "New Title Edit",
    "content": "This is some rad test content...",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "value": "Something Big is Coming",
        "type": "text"
      },
      {
        "title": "Subheadline",
        "key": "subheadline",
        "value": "I bet you want to know what it is...",
        "type": "text"
      }
    ],
    "bucket": "568c5bbefd0dce302c000001",
    "type_slug": "examples",
    "created": "2016-01-06T00:28:39.982Z"
  }
}
```
:::

::::

## Delete Object

Delete an existing Object in your Bucket.

| Parameter | Required | Type   | Description                       |
| --------- | -------- | ------ | --------------------------------- |
| slug      | required | String | Unique identifier for your Object |
| write_key |          | String | Your Bucket write key             |

:::: tabs :options="{ useUrlFragment: false }"

::: tab bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/objects/:object_slug
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
  "message": "Object deleted"
}
```
:::


::: tab javascript
**Definition**

```js
bucket.deleteObject()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.deleteObject({
  slug: 'cosmic-js-example'
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
  "message": "Object deleted"
}
```
:::

::::
