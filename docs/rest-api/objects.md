---
sidebarDepth: 1
---

# Objects

The following endpoints allow you to add, edit and delete Objects in your Bucket.

::: tip Quick Tip
Your read and write keys will be required to perform the following requests. These can be found in <i>Your Bucket > Basic Settings</i> in your [Bucket Dashboard ](https://app.cosmicjs.com/login).
:::

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
| metafields             |          | Array  | Add Metafields to your Object. See [Metafields Model](/rest-api/metafields.html#model).               |
| locale                 |          | String | Add localization to the Object                                     |
| write_key              |          | String | Your Bucket write key                                              |
| publish_at             |          | Number | UNIX millisecond timestamp. Publish automatically at a later time. |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/add-object
```

**Example Request**

```json
{
  "title": "Cosmic Example",
  "type_slug": "examples",
  "content": "Learning the Cosmic API is really fun and so easy",
  "metafields": [
    {
      "key": "Headline",
      "type": "text",
      "value": "Learn Cosmic!"
    },
    {
      "key": "Author",
      "type": "text",
      "value": "Quasar Jones"
    }
  ],
  "options": {
    "slug_field": false
  },
  "write_key": "your-write-key-found-in-bucket-settings"
}
```

**Example Response**

```json
{
  "object": {
    "slug": "cosmic-js-example",
    "title": "Cosmic Example",
    "content": "Learning the Cosmic API is really fun and so easy",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "type": "text",
        "value": "Learn Cosmic!"
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

::: tab Node.js
**Definition**

```js
bucket.addObject()
```

**Example Request**

```js
const params = {
  title: 'Cosmic Example',
  type_slug: 'examples',
  content: 'Learning the Cosmic API is really fun and so easy',
  metafields: [
    {
      key: 'Headline',
      type: 'text',
      value: 'Learn Cosmic!'
    },
    {
      key: 'Author',
      type: 'text',
      value: 'Quasar Jones'
    }
  ],
  options: {
    slug_field: false
  }
}
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: "your-write-key-found-in-bucket-settings"
})
bucket.addObject(params)
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
  "object": {
    "slug": "cosmic-js-example",
    "title": "Cosmic Example",
    "content": "Learning the Cosmic API is really fun and so easy",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "type": "text",
        "value": "Learn Cosmic!"
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

Get Objects in your Bucket.

::: tip Quick Tip
For a quick reference to this endpoint click the "Developer Tools" button on your Object table in your [Bucket Dashboard ](https://app.cosmicjs.com/login).

<a href="https://app.cosmicjs.com/login" target="_blank"><img src="https://cdn.cosmicjs.com/6647c4e0-3c93-11ea-93e2-f96724e61d4d-dev-tools-btn.png" width="170"/></a>
:::


| Parameter             | Required | Type   | Description                                                     | Default | 
| --------------------- | -------- | ------ | --------------------------------------------------------------- | ------- |
| type                  |          | String | The Object Type slug                                            |         |
| limit                 |          | Number | The number of Objects to return                                 | 1000    |
| skip                  |          | Number | The number of Objects to skip                                   | 0       |
| status                |          | Enum   | published, draft, all                                           |  published     |
| hide_metafields       |          | Enum   | true, Hides metafields                                          |    false     |
| sort                  |          | Enum   | created_at, -created_at, modified_at, -modified_at, random, order      |    order     |
| locale                |          | String | Filter by locale |         |
| q                     |          | String | Searches title and content properties for this string  |         |
| query              |          | JSON | A JSON string to perform advanced queries  |         |
| metadata[key]          |         | String   | Search by Metafield value. Object IDs for Object Metafields (comma separated for multiple)             |         |         |
| metafield_key         |          | String | (Deprecated, use `metadata[key]` instead) Metafield key to search for                                     |         |
| metafield_value       |          | String | (Deprecated, use `metadata[key]` instead) Metafield contains value                                        |         |
| metafield_object_id   |          | String | (Deprecated, use `metadata[key]` instead) Object Metafield Object ID (stored as Metafield value)          |         |
| filters[_id]          |          | String | Filter by Object IDs (comma separated for multiple)             |         |
| filters[connected_to] |          | String | Returns Objects that reference the specified Object ID (String) |         |
| props                |          | Enum   | Declare which properties to return in comma-separated string. Down to first-level metadata properties only. Reference full Object for all available properties. Example: `?props=slug,title,metadata.categories,metadata.author`                 |         |
| depth |          | Number | 0-3, Limits the depth of nested Objects from Object Metafields |         |
| created_by |          | String | Created by User ID |         |
| pretty                |          | Enum   | true, Makes the response more reader-friendly                   |    false     |
| read_key              |          | String | Your Bucket read key  |         |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&read_key=your-read-key-found-bucket-settings
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/simple-react-blog/objects?pretty=true&hide_metafields=true&limit=10&props=slug,title,type_slug,metadata.categories&type=posts&read_key=your-read-key-found-bucket-settings"
```

**Example Response**
```json
{
  "objects": [
    {
      "slug": "a-wonderful-blog-post-about-earth",
      "title": "A Wonderful Blog Post About Earth",
      "type_slug": "posts",
      "metadata": {
        "categories": [
          {
            "_id": "5d6968cf0442c40b78ea41d0",
            "bucket": "5d6968cf5e24cd0c2ee84538",
            "slug": "lets-get-technical",
            "title": "Let's Get Technical",
            "content": "",
            "metafields": [],
            "type_slug": "categories",
            "created": "2017-10-12T13:27:49.664Z",
            "created_at": "2017-10-12T13:27:49.664Z",
            "modified_at": "2019-08-30T18:19:59.892Z",
            "status": "published",
            "published_at": "2019-08-30T18:19:59.892Z"
          },
          {
            "_id": "5d6968cf0442c40b78ea41d4",
            "bucket": "5d6968cf5e24cd0c2ee84538",
            "slug": "random",
            "title": "Random",
            "content": "",
            "metafields": [],
            "type_slug": "categories",
            "created": "2017-10-12T13:27:49.666Z",
            "created_at": "2017-10-12T13:27:49.666Z",
            "modified_at": "2019-08-30T18:19:59.901Z",
            "status": "published",
            "published_at": "2019-08-30T18:19:59.901Z"
          }
        ]
      }
    },
    {
      "slug": "another-wonderful-blog-post-about-earth",
      "title": "Another Wonderful Blog Post About Earth",
      "type_slug": "posts",
      "metadata": {
        "categories": [
          {
            "_id": "5d6968cf0442c40b78ea41d4",
            "bucket": "5d6968cf5e24cd0c2ee84538",
            "slug": "random",
            "title": "Random",
            "content": "",
            "metafields": [],
            "type_slug": "categories",
            "created": "2017-10-12T13:27:49.666Z",
            "created_at": "2017-10-12T13:27:49.666Z",
            "modified_at": "2019-08-30T18:19:59.901Z",
            "status": "published",
            "published_at": "2019-08-30T18:19:59.901Z"
          }
        ]
      }
    }
  ],
  "total": 2
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.getObjects()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  read_key: "your-read-key-found-in-bucket-settings"
})

bucket.getObjects({
  type: 'posts',
  props: 'slug,title,type_slug',
  limit: 10
})
```
**Example Response**
```json
{
  "objects": [
    {
      "slug": "a-wonderful-blog-post-about-earth",
      "title": "A Wonderful Blog Post About Earth",
      "type_slug": "posts"
    },
    {
      "slug": "another-wonderful-blog-post-about-earth",
      "title": "Another Wonderful Blog Post About Earth",
      "type_slug": "posts"
    }
  ],
  "total": 2,
  "limit": 10
}
```

:::


::::


## Search and Filter

Get Objects based on search variables.

::: tip Quick Tip
Read [the Changelog announcement](https://www.cosmicjs.com/changelog/filters-and-smart-views) to learn more.

See the [Get Objects Params](#get-objects) to learn how to use params `q`, `metadata[key]`, and `created_by` for flexible searching and filterting.
:::

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&q=:search_text&read_key=your-read-key-found-in-bucket-settings
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&metadata[:key]=:value&read_key=your-read-key-found-in-bucket-settings
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&filters[_id]=:object_id_1,:object_id_2&read_key=your-read-key-found-in-bucket-settings
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/wedding-site/objects?type=groomsmen&metadata[official-title]=Best%20Man&read_key=your-read-key-found-in-bucket-settings"
```

:::

::: tab Node.js
**Definition**

```js
bucket.getObjects()
```

### Example Requests

#### Search by keyword (title or content)
```js
const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'cosmic-js',
  read_key: 'your-read-key-found-in-bucket-settings'
})

// Search Objects by keyword in title or content
const search_keyword = (await bucket.getObjects({
  type: 'articles',
  q: 'React.js'
})).objects
console.log(search_keyword)
```

#### Search by metadata
```js
const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'creative-agency',
  read_key: 'your-read-key-found-in-bucket-settings'
})

// Search Objects by Metadata
const search_metadata = (await bucket.getObjects({
  type: 'pages',
  metadata: {
    headline: 'Welcome'
  }
})).objects
console.log(search_metadata)
```

#### Filter by Object IDs
```js
const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'wedding-site',
  read_key: 'your-read-key-found-in-bucket-settings'
})
// Filter Objects 
const filter = (await bucket.getObjects({
  type: 'groomsmen',
  filters: {
    _id: '55b3da7740d7a3791b000009,55b3da7740d7a3791b00000a'
  }
})).objects
console.log(filter)
```

:::

::::


## Advanced Queries

Advanced queries gives you powerful database-like functionality for content fetching. Use the `query` parameter to contruct a valid JSON (stringified) query on the [Get Objects Endpoint](#get-objects). See [example requests below](#example-queries).

**Definition**
```
GET https://api.cosmicjs.com/v1/:bucket_slug/objects?type=:type_slug&read_key=your-read-key-found-bucket-settings&query=:JSON_query
```

### Available Object Field Keys to Perform Queries

| Parameter       | Description                                   |
| --------------- | ----------------------------------------------|
| _id             | Object _id     |
| title           | Object Title     |
| slug            | Object Slug     |
| content         | Object Content     |
| created_at      | Object Created at Date     |
| published_at    | Object Published at Date     |
| modified_at     | Object Modified at Date     |
| created_by      | Object Created by user id     |
| modified_by      | Object Modified by user id     |
| metadata.$key      | Metadata value(s)     |

### Query Selectors

| Parameter       | Description                                   |
| --------------- | ----------------------------------------------|
| $eq             | Matches values that are equal to a specified value. Equivalent to direct key/value query.|
| $gt             |	Matches values that are greater than a specified value.|
| $gte            | Matches values that are greater than or equal to a specified value.|
| $lt             | Matches values that are less than a specified value. |
| $lte            | Matches values that are less than or equal to a specified value. |
| $in             | Matches any of the values specified in an array. |
| $ne             | Matches all values that are not equal to a specified value. |
| $nin            |	Matches none of the values specified in an array.|
| $regex, $option | Search for string, use `$option: "i"` for case insensitive matches |


### Logic Operators

| Parameter       | Description                                   |
| --------------- | ----------------------------------------------|
| $and            | Returns Objects that match all conditions     |
| $or             | Returns Objects that match any conditions     |

### Example Queries

**Use the Objects API Endpoint for the following examples:**
```javascript
const objects_endpoint = "https://api.cosmicjs.com/v1/simple-react-blog/objects?type=posts&props=title,slug,metadata&read_key=my-read-key"
```
<br>

**Exact title match**
```javascript
const query = {
  "title": "Post 1"
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Exact _id match**
```javascript
const query = {
  "_id": "valid-object-id"
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Match any _ids**
```javascript
const query = {
  "_id": ["valid-object-id-1","valid-object-id-2"]
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)

// Equivalent
const query = {
  "_id": {
    "$in": ["valid-object-id-1","valid-object-id-2"]
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Match any _ids not equal to**
```javascript
const query = {
  "_id": {
    "$ne": "valid-object-id"
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Match any _ids except any in the array of values**
```javascript
const query = {
  "_id": {
    "$nin": ["valid-object-id-1","valid-object-id-2"]
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Exact slug match**
```javascript
const query = {
  "slug": "post-1"
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for string case insensive**
```javascript
const query = {
  "content": {
    "$regex": "jamstack",
    "$option": "i"
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for matches metadata value (Number Metafield)**
```javascript
const query = {
  "metadata.number": 1
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for matches any metadata values**
```javascript
const query = {
  "$or": [{
    "metadata.letter": "a",
    "metadata.letter": "b"
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for matches all metadata values**
```javascript
const query = {
  "$and": [{
    "metadata.letter": "a",
    "metadata.number": 1
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for matches greater than or equal to metadata value**
```javascript
const query = {
  "metadata.number": {
    "$gte": 3
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for exact metadata value (Switch Metafield)**
```javascript
const query = {
  "metadata.is_featured": true
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for nested JSON metadata value (JSON Metafield)**
```javascript
const query = {
  "metadata.json_data": {
    "is_awesome": true,
    "other_data": {
      "nested": "yep"
    }
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for matches Single Object Metafield**
```javascript
const query = {
  "metadata.category": "category-id-1"
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for matches all Multiple Object Metafield**
```javascript
const query = {
  "metadata.categories": ["category-id-1","category-id-2"]
}
// Equivalent
const query = {
  "metadata.categories": {
    "$and": ["category-id-1","category-id-2"]
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>

**Search for matches any Multiple Object Metafield**
```javascript
const query = {
  "metadata.categories": {
    "$or": ["category-id-1","category-id-2"]
  }
}
fetch(`${objects_endpoint}&query=${JSON.stringify(query)}`)
```
<br>




## Get Object

Returns a single Object from your Bucket.

::: tip Quick Tip
For a quick reference to this endpoint click the "Developer Tools" button on your Edit Object view in your [Bucket Dashboard ](https://app.cosmicjs.com/login).

<a href="https://app.cosmicjs.com/login" target="_blank"><img src="https://cdn.cosmicjs.com/6647c4e0-3c93-11ea-93e2-f96724e61d4d-dev-tools-btn.png" width="170"/></a>
:::

| Parameter       | Required | Type   | Description                                    |
| --------------- | -------- | ------ | ---------------------------------------------- |
| slug            | required | String | Unique identifier for your Object              |
| status          |          | Enum   | all, Return published and draft status Objects |
| revision        |          | String | The revision_id of the Object Revision         |
| hide_metafields |          | Enum   | true, Hides metafields                         |
| locale          |          | String | Filter by locale                               |
| props                |          | Enum   | Declare which properties to return in comma-separated string. Down to first-level metadata properties only. Reference full Object for all available properties. Example: `?props=slug,title,metadata.categories,metadata.author`                 |
| depth |          | Number | 0-3, Limits the depth of nested Objects from Object Metafields |
| pretty          |          | Enum   | true, Makes the response more reader-friendly  |
| read_key        |          | String | Your Bucket read key                           |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/:bucket_slug/object/:slug?read_key=your-read-key-found-in-bucket-settings
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/simple-react-blog/object/a-wonderful-blog-post-about-earth?pretty=true&hide_metafields=true&props=slug,title,content,metadata.categories&read_key=your-read-key-found-in-bucket-settings"
```

**Example Response**
```json
{
  "object": {
    "slug": "a-wonderful-blog-post-about-earth",
    "title": "A Wonderful Blog Post About Earth",
    "content": "<p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!</p><p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p><p>If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon.</p><p>To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature&mdash;could one dream of anything more?</p><p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p><p>NASA is not about the &lsquo;Adventure of Human Space Exploration&rsquo;&hellip;We won&rsquo;t be doing it just to get out there in space &ndash; we&rsquo;ll be doing it because the things we learn out there will be making life better for a lot of people who won&rsquo;t be able to go.</p><p>Problems look mighty small from 150 miles up.</p><p>That&#39;s one small step for [a] man, one giant leap for mankind.</p><p>Where ignorance lurks, so too do the frontiers of discovery and imagination.</p><p>Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.</p>",
    "metadata": {
      "categories": [
        {
          "_id": "5d6968cf0442c40b78ea41d0",
          "bucket": "5d6968cf5e24cd0c2ee84538",
          "slug": "lets-get-technical",
          "title": "Let's Get Technical",
          "content": "",
          "metafields": [],
          "type_slug": "categories",
          "created": "2017-10-12T13:27:49.664Z",
          "created_at": "2017-10-12T13:27:49.664Z",
          "modified_at": "2019-08-30T18:19:59.892Z",
          "status": "published",
          "published_at": "2019-08-30T18:19:59.892Z"
        },
        {
          "_id": "5d6968cf0442c40b78ea41d4",
          "bucket": "5d6968cf5e24cd0c2ee84538",
          "slug": "random",
          "title": "Random",
          "content": "",
          "metafields": [],
          "type_slug": "categories",
          "created": "2017-10-12T13:27:49.666Z",
          "created_at": "2017-10-12T13:27:49.666Z",
          "modified_at": "2019-08-30T18:19:59.901Z",
          "status": "published",
          "published_at": "2019-08-30T18:19:59.901Z"
        }
      ]
    }
  }
}
```

:::

::: tab Node.js

**Defintion**
```js
bucket.getObject()
```

**Example Request**
```js
const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-read-key-found-in-bucket-settings'
})

bucket.getObject({
  slug: 'a-wonderful-blog-post-about-earth',
  props: 'slug,title,content,metadata.categories'
})
```

**Example Response**
```json
{
  "object": {
    "slug": "a-wonderful-blog-post-about-earth",
    "title": "A Wonderful Blog Post About Earth",
    "content": "<p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!</p><p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p><p>If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon.</p><p>To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature&mdash;could one dream of anything more?</p><p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p><p>NASA is not about the &lsquo;Adventure of Human Space Exploration&rsquo;&hellip;We won&rsquo;t be doing it just to get out there in space &ndash; we&rsquo;ll be doing it because the things we learn out there will be making life better for a lot of people who won&rsquo;t be able to go.</p><p>Problems look mighty small from 150 miles up.</p><p>That&#39;s one small step for [a] man, one giant leap for mankind.</p><p>Where ignorance lurks, so too do the frontiers of discovery and imagination.</p><p>Dinosaurs are extinct today because they lacked opposable thumbs and the brainpower to build a space program.</p>",
    "metadata": {
      "categories": [
        {
          "_id": "5d6968cf0442c40b78ea41d0",
          "bucket": "5d6968cf5e24cd0c2ee84538",
          "slug": "lets-get-technical",
          "title": "Let's Get Technical",
          "content": "",
          "metafields": [],
          "type_slug": "categories",
          "created": "2017-10-12T13:27:49.664Z",
          "created_at": "2017-10-12T13:27:49.664Z",
          "modified_at": "2019-08-30T18:19:59.892Z",
          "status": "published",
          "published_at": "2019-08-30T18:19:59.892Z"
        },
        {
          "_id": "5d6968cf0442c40b78ea41d4",
          "bucket": "5d6968cf5e24cd0c2ee84538",
          "slug": "random",
          "title": "Random",
          "content": "",
          "metafields": [],
          "type_slug": "categories",
          "created": "2017-10-12T13:27:49.666Z",
          "created_at": "2017-10-12T13:27:49.666Z",
          "modified_at": "2019-08-30T18:19:59.901Z",
          "status": "published",
          "published_at": "2019-08-30T18:19:59.901Z"
        }
      ]
    }
  }
}
```

:::

::::


## Object Revisions
Every Object has Revisions saved. Object Revisions cannot be edited or deleted.

### Get Object Revisions

Get Object Revisions from an Object.

| Parameter       | Required | Type   | Description                                    |
| --------------- | -------- | ------ | ---------------------------------------------- |
| slug            | required | String | Unique identifier for your Object              |
| limit                 |          | Number | The number of Revisions to return                                 |
| skip                  |          | Number | The number of Revisions to skip                                   |
| sort          |          | Enum   | created_at, -created_at (default is -created_at) |
| hide_metafields |          | Enum   | true, Hides metafields                         |
| locale          |          | String | Filter by locale                               |
| props                |          | Enum   | Declare which properties to return in comma-separated string. Down to first-level metadata properties only. Reference full Object for all available properties. Example: `?props=slug,title,metadata.categories,metadata.author`                 |
| depth |          | Number | 0-3, Limits the depth of nested Objects from Object Metafields |
| pretty          |          | Enum   | true, Makes the response more reader-friendly  |
| read_key        |          | String | Your Bucket read key                           |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/object/:object_slug/revisions
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/simple-react-blog/object/a-wonderful-blog-post-about-earth/revisions?pretty=true&limit=2&props=slug,title,content,created_at"
```

**Example Response**
```json
{
  "revisions": [
    {
      "slug": "a-wonderful-blog-post-about-earth",
      "title": "A Wonderful Blog Post About Earth",
      "content": "<p>New content from another saved draft. When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!</p><p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p><p>If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon.</p>",
      "created_at": "2019-10-12T13:27:49.665Z"
    },
    {
      "slug": "a-wonderful-blog-post-about-earth",
      "title": "A Wonderful Blog Post About Earth",
      "content": "<p>Some other content that was edited in draft. When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!</p><p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p><p>If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon.</p>",
      "created_at": "2019-10-11T13:27:49.665Z"
    },
  ],
  "limit": 2,
  "total": 10
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.getObjectRevisions()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')
const api = Cosmic()
const bucket = api.bucket({
  slug: 'your-bucket-slug',
  read_key: 'your-read-key-found-in-bucket-settings'
})

bucket.getObjectRevisions({
  slug: 'a-wonderful-blog-post-about-earth',
  props: 'slug,title,created_at',
  limit: 10
})
```
**Example Response**
```json
{
  "revisions": [
    {
      "slug": "a-wonderful-blog-post-about-earth",
      "title": "A Wonderful Blog Post About Earth",
      "created_at": "2019-10-12T13:27:49.665Z"
    },
    {
      "slug": "another-wonderful-blog-post-about-earth",
      "title": "Another Wonderful Blog Post About Earth",
      "created_at": "2019-10-11T13:27:49.665Z"
    }
  ],
  "total": 2,
  "limit": 10
}
```

:::


::::

### Add Object Revision

Adds Revision to an Object set to `draft` status. To edit a published Object use the [Edit Object method](#edit-object). Same properties as [Add Object params](#add-object).

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/object/:object_slug/revisions
```

**Example Request**

```json
{
  "title": "Cosmic Example",
  "type_slug": "examples",
  "content": "Learning the Cosmic API is really fun and so easy",
  "status": "draft",
  "metafields": [
    {
      "key": "Headline",
      "type": "text",
      "value": "Learn Cosmic!"
    },
    {
      "key": "Author",
      "type": "text",
      "value": "Quasar Jones"
    }
  ],
  "write_key": "your-write-key-found-in-bucket-settings"
}
```

**Example Response**

```json
{
  "revision": {
    "slug": "cosmic-js-example",
    "title": "Cosmic Example",
    "content": "Learning the Cosmic API is really fun and so easy",
    "status": "draft",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "type": "text",
        "value": "Learn Cosmic!"
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
    "_id": "568c5fb72f0c5d532d000001"
  }
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.addObjectRevision()
```

**Example Request**

```js
const params = {
  slug: 'cosmic-js-example',
  title: 'Cosmic Example',
  type_slug: 'examples',
  content: 'Learning the Cosmic API is really fun and so easy',
  metafields: [
    {
      key: 'Headline',
      type: 'text',
      value: 'Learn Cosmic!'
    },
    {
      key: 'Author',
      type: 'text',
      value: 'Quasar Jones'
    }
  ],
  options: {
    slug_field: false
  }
}
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: 'your-write-key-found-in-bucket-settings'
})
bucket.addObjectRevision(params)
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
  "revision": {
    "slug": "cosmic-js-example",
    "title": "Cosmic Example",
    "content": "Learning the Cosmic API is really fun and so easy",
    "metafields": [
      {
        "title": "Headline",
        "key": "headline",
        "type": "text",
        "value": "Learn Cosmic!"
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
    "_id": "568c5fb72f0c5d532d000001"
  }
}
```

:::

::::

## Edit Object

Edit an existing Object in your Bucket.

| Parameter              | Required | Type   | Description                                                                             |
| ---------------------- | -------- | ------ | --------------------------------------------------------------------------------------- |
| slug                   | required | String | Unique identifier for your Object                                                       |
| type_slug              |          | String | Object Type                                                                             |
| title                  |          | String | Your Bucket title                                                                       |
| content                |          | String | Add Content to your Object                                                              |
| status                 |          | Enum   | draft, published, defaults to published                                                 |
| options.slug_field     |          | Bool   | Set to false to hide the slug field                                                     |
| options.content_editor |          | Bool   | Set to false to hide the content editor                                                 |
| metafields             |          | Array  | Add Metafields to your Object. See [Metafields Model](/rest-api/metafields.html#model). |
| locale                 |          | String | Edit Object locale                                                                      |
| write_key              |          | String | Your Bucket write key                                                                   |
| publish_at             |          | Number | UNIX millisecond timestamp. Publish automatically at a later time.                      |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
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
  ],
  "write_key": "your-write-key-found-in-bucket-settings"
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

::: tab Node.js
**Definition**

```js
bucket.editObject()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: 'your-write-key-found-in-bucket-settings'
})
bucket.editObject({
  slug: 'cosmic-js-example',
  title: 'New Title Edit'
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

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/objects/:object_slug
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
  "message": "Object deleted"
}
```

:::

::: tab Node.js
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
bucket
  .deleteObject({
    slug: 'cosmic-js-example'
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
  "message": "Object deleted"
}
```

:::

::::
