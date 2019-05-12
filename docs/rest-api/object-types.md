# Object Types

## Add Object Type

Add a new Object Type to your Bucket.

| Parameter  | Required | Type   | Description                                     |
| ---------- | -------- | ------ | ----------------------------------------------- |
| title      | required | String | Plural title of your Object Type                |
| slug       |          | String | Plural slug of your Object Type                 |
| singular   |          | String | Singular title of your Object Type              |
| metafields |          | Array  | Default Metafields for each Object in this type |
| pretty     |          | Enum   | true, Makes the response more reader-friendly   |
| write_key  |          | String | Restrict write access to your Bucket            |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/add-object-type
```

**Example Request**

```json
{
  "title": "Pages",
  "singular": "Page",
  "slug": "pages",
  "metafields": [
    {
      "type": "text",
      "title": "Headline",
      "key": "headline",
      "required": true
    },
    {
      "type": "file",
      "title": "Hero",
      "key": "hero",
      "required": true
    }
  ]
}
```

**Example Response**

```json
{
  "object_type": {
    "slug": "pages",
    "title": "Pages",
    "singular": "Page",
    "metafields": [
      {
        "type": "text",
        "title": "Headline",
        "key": "headline",
        "required": true
      },
      {
        "type": "file",
        "title": "Hero",
        "key": "hero",
        "required": true
      }
    ],
    "created_at": "2017-05-30T02:06:35.373Z",
    "metadata": null
  }
}
```

:::

::: tab Node.js

:::
**Definition**

```js
bucket.addObjectType()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
const params = {
  title: 'Pages',
  singular: 'Page',
  slug: 'pages',
  metafields: [
    {
      type: 'text',
      title: 'Headline',
      key: 'headline',
      required: true
    },
    {
      type: 'file',
      title: 'Hero',
      key: 'hero',
      required: true
    }
  ]
}
bucket.addObjectType(params)
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
  "object_type": {
    "slug": "pages",
    "title": "Pages",
    "singular": "Page",
    "metafields": [
      {
        "type": "text",
        "title": "Headline",
        "key": "headline",
        "required": true
      },
      {
        "type": "file",
        "title": "Hero",
        "key": "hero",
        "required": true
      }
    ],
    "created_at": "2017-05-30T02:06:35.373Z",
    "metadata": null
  }
}
```

::::

## Get Object Types

Get all Object Types in your Bucket.

| Parameter | Required | Type   | Description                                   |
| --------- | -------- | ------ | --------------------------------------------- |
| pretty    |          | Enum   | true, Makes the response more reader-friendly |
| read_key  |          | String | Restrict read access to your Bucket           |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/object-types
```

Example Request

curl "https://api.cosmicjs.com/v1/wedding-site/object-types"
:::

::: tab Node.js
**Definition**

```js
bucket.getObjectTypes()
```

**Example Request**

<iframe src="https://runkit.com/e?name=runkit-embed-0&amp;preamble=&amp;location=https%3A%2F%2Fcosmicjs.github.io%2Frest-api-docs%2F&amp;minHeight=&amp;gutterStyle=outside&amp;usedDeprecatedOptions=%5B%5D&amp;base64source=Y29uc3QgQ29zbWljID0gcmVxdWlyZSgnY29zbWljanMnKQpjb25zdCBhcGkgPSBDb3NtaWMoKQpjb25zdCBidWNrZXQgPSBhcGkuYnVja2V0KHsKICBzbHVnOiAnc2ltcGxlLWJsb2ctd2Vic2l0ZScKfSkKY29uc3QgZGF0YSA9IChhd2FpdCBidWNrZXQuZ2V0T2JqZWN0VHlwZXMoKSkub2JqZWN0X3R5cGVz" frameborder="0" name="runkit-embed-0" style="height: 166px; width: calc(100% + 200px); padding: 0px; margin: 0px 0px 0px calc(-100px); border: 0px; background-color: transparent;"></iframe>

:::

::::

## Edit Object Type

Edit an existing Object Type in your Bucket.

| Parameter  | Required | Type   | Description                                     |
| ---------- | -------- | ------ | ----------------------------------------------- |
| slug       | required | String | Plural slug of your Object Type                 |
| title      |          | String | Singular title of your Object Type              |
| metafields |          | Array  | Default Metafields for each Object in this type |
| write_key  |          | String | Restrict write access to your Bucket            |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
PUT https://api.cosmicjs.com/v1/:bucket_slug/edit-object-type
```

**Example Request**

```json
{
  "slug": "pages",
  "metafields": [
    {
      "type": "text",
      "title": "Headline",
      "key": "headline",
      "required": true
    },
    {
      "type": "file",
      "title": "Hero",
      "key": "hero",
      "required": true
    },
    {
      "type": "text",
      "title": "Tagline",
      "key": "tagline",
      "required": true
    }
  ]
}
```

**Example Response**

```json
{
  "object_type": {
    "slug": "pages",
    "title": "Pages",
    "singular": "Page",
    "metafields": [
      {
        "type": "text",
        "title": "Headline",
        "key": "headline",
        "required": true
      },
      {
        "type": "file",
        "title": "Hero",
        "key": "hero",
        "required": true
      },
      {
        "type": "text",
        "title": "Tagline",
        "key": "tagline",
        "required": true
      }
    ],
    "modified_at": "2017-05-30T02:10:35.373Z",
    "created_at": "2017-05-30T02:06:35.373Z",
    "metadata": null
  }
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.editObjectType()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.editObjectType({
  slug: 'posts',
  title: 'New Posts Title'
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
  "object_type": {
    "slug": "pages",
    "title": "Pages",
    "singular": "Page",
    "metafields": [
      {
        "type": "text",
        "title": "Headline",
        "key": "headline",
        "required": true
      },
      {
        "type": "file",
        "title": "Hero",
        "key": "hero",
        "required": true
      },
      {
        "type": "text",
        "title": "Tagline",
        "key": "tagline",
        "required": true
      }
    ],
    "modified_at": "2017-05-30T02:10:35.373Z",
    "created_at": "2017-05-30T02:06:35.373Z",
    "metadata": null
  }
}
```

:::

::::

## Delete Object Type

Delete an existing Object Type from your Bucket. \* This does not delete Objects in this Object Type.

| Parameter | Required | Type   | Description                          |
| --------- | -------- | ------ | ------------------------------------ |
| write_key |          | String | Restrict write access to your Bucket |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/object-types/:type_slug
```

_Example Request Body_

```json
{
  "write_key": "your-key-added-in-bucket-settings" // optional
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
bucket.deleteObjectType()
```

**Example Request Body**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
})
bucket.deleteObjectType({
  slug: 'posts'
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
