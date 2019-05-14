---
sidebarDepth: 2
---

# Cosmic JS GraphQL API

Welcome to the Cosmic JS GraphQL documentation. Learn about all of the features and methods to perform `queries` and `mutations` on your Bucket content.

The API is fully CRUD capable, allowing you to perform Create, Read, Update, and Delete requests to your Cosmic JS Buckets.

## API Endpoint
All `queries` and `mutations` are called to the Cosmic JS GraphQL endpoint:

```
https://graphql.cosmicjs.com/v1
```
To access the legacy endpoint: `https://graphql-legacy.cosmicjs.com/v1`

## Playground
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**
<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## Methods Overview
### Queries
In GraphQL terminolgy, `queries` perform read actions on API resources.
| Method  | Description | Authentication Required |
| ---------- | -------- | -------- |
| [getObjects](#getobjects) | Get Objects from a Bucket | |
| [getObject](#getobject) | Get a single Object from a Bucket | |
| [getMedia](#getmedia) | Get Media from a Bucket | |
| [getObjectTypes](#getobjecttypes) | Get Object Types from a Bucket | |
| [getBucket](#getbucket) | Get all Bucket content | |
| [getAccessToken](#getaccesstoken) | Get token for account-related access (not required for Bucket-level access) |
| [getBuckets](#getbuckets) | Get all Buckets on your user account | yes |
| [getUsers](#getusers) | Get Users in a Bucket | yes |
| [getUser](#getuser) | Get a User in a Bucket | yes |
| objects (DEPRECATED) | Get Objects in a Bucket. Use `getObjects` method instead. | |
| objectsByType (DEPRECATED) | Get Objects bt Type in a Bucket. Use `getObjects` method with the `type` parameter instead. | |
| object (DEPRECATED) | Get an Object in a Bucket. Use `getObject` method instead. | |

### Mutations
In GraphQL terminolgy, `mutations` perform write, edit, or delete actions on API resources.
| Method  | Description | Authentication Required |
| ---------- | -------- | -------- |
| [addObject](#addobject) | Add Object to your Bucket | |
| [editObject](#editobject) | Edit Object in a Bucket | |
| [deleteObject](#deleteobject) | Delete Object in a Bucket | |
| [addObjectType](#addobjecttype) | Add Object Type to your Bucket | |
| [editObjectType](#editobjecttype) | Edit Object Type on your Bucket | |
| [deleteObjectType](#deleteobjecttype) | Delete Object Type on your Bucket | |
| [addBucket](#addbucket) | Add Bucket to your user account | yes |
| [deleteBucket](#deletebucket) | Delete Bucket from your user account | yes |
| [importBucket](#importbucket) | Import Bucket on your user account | yes |
| [addUser](#adduser) | Add user to your Bucket | yes |
| [addWebhook](#addwebhook) | Add Webhook to your Bucket | yes |
| [deleteWebhook](#deletewebhook) | Delete Webhook in your Bucket | yes |
| [addMedia](#addmedia) | `Coming soon` | yes |
| [deleteMedia](#deletemedia) | Delete Media from your Bucket | yes |
| [addExtension](#addextension) | `Coming soon` | yes |
| [deleteExtension](#deleteextension) | Delete an Extension in your Bucket | yes |


## Queries

### getObjects
```
getObjects(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>


### getObject
```
getObject(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getMedia
```
getMedia(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getObjectTypes
```
getObjectTypes(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getBucket

```
getBucket(bucket_slug)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getAccessToken

```
getAccessToken(email, password)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getBuckets

```
getBuckets()
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBuckets%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBuckets%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getUsers

```
getUsers(bucket_slug)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUsers(bucket_slug%3A%20%22art%22)%20%7B%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUsers(bucket_slug%3A%20%22art%22)%20%7B%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getUser

```
getUser(bucket_slug, user_id)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUser(bucket_slug%3A%20%22art%22%2C%20user_id%3A%20%2256d66b2f903a79b904000001%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUser(bucket_slug%3A%20%22art%22%2C%20user_id%3A%20%2256d66b2f903a79b904000001%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>


## Mutations

### addObject

```
addObject(bucket_slug, input)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### editObject

```
editObject(bucket_slug, input)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20slug%3A%20%22post-title%22%2C%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20EDITED%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20slug%3A%20%22post-title%22%2C%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20EDITED%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteObject

```
deleteObject(bucket_slug, input)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20object_slug%3A%20%22post-title%22)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20object_slug%3A%20%22post-title%22)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addObjectType

```
addObjectType(bucket_slug, input)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### editObjectType

```
editObjectType(bucket_slug)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%20EDITED%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%20EDITED%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteObjectType

```
deleteObjectType(bucket_slug, type_slug)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20type_slug%3A%20%22pages%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20type_slug%3A%20%22pages%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addBucket

```
addBucket(input)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addBucket(%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22My%20New%20Bucket%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20slug%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addBucket(%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22My%20New%20Bucket%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20slug%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteBucket

```
deleteBucket(bucket_id)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteBucket(%0A%20%20%20%20bucket_id%3A%20%225cd8658c1287fc5d8e3ef1d8%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteBucket(%0A%20%20%20%20bucket_id%3A%20%225cd8658c1287fc5d8e3ef1d8%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### importBucket

```
importBucket(bucket_id, title, object_types, objects, media, media_folders, webhooks, extensions)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20importBucket(%0A%20%20%20%20bucket_id%3A%20%225cd4b0fa7942c32cf73b0751%22%2C%0A%20%20%20%20object_types%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20importBucket(%0A%20%20%20%20bucket_id%3A%20%225cd4b0fa7942c32cf73b0751%22%2C%0A%20%20%20%20object_types%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addUser

```
addUser(bucket_slug, input)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addUser(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20email%3A%20%20%22someguy%40test.com%22%2C%0A%20%20%20%20%20%20role%3A%20editor%2C%0A%20%20%20%20%20%20first_name%3A%20%22Test%22%2C%0A%20%20%20%20%20%20last_name%3A%20%22User%22%0A%20%20%20%20%7D%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addUser(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20email%3A%20%20%22someguy%40test.com%22%2C%0A%20%20%20%20%20%20role%3A%20editor%2C%0A%20%20%20%20%20%20first_name%3A%20%22Test%22%2C%0A%20%20%20%20%20%20last_name%3A%20%22User%22%0A%20%20%20%20%7D%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addWebhook

```
addWebhook(input)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20event%3A%20objectCreatedPublished%2C%0A%20%20%20%20%20%20endpoint%3A%20%22https%3A%2F%2Fgoogle.com%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20id%0A%20%20%20%20event%0A%20%20%20%20endpoint%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20event%3A%20objectCreatedPublished%2C%0A%20%20%20%20%20%20endpoint%3A%20%22https%3A%2F%2Fgoogle.com%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20id%0A%20%20%20%20event%0A%20%20%20%20endpoint%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteWebhook

```
deleteWebhook(bucket_slug, webhook_id)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20webhook_id%3A%20%22adb967e0-74e6-11e9-b625-814d295027b3%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20webhook_id%3A%20%22adb967e0-74e6-11e9-b625-814d295027b3%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addMedia
`Coming soon!`
```
addMedia(bucket_slug, input)
```

### deleteMedia

```
deleteMedia(bucket_slug, media_id)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteMedia(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20media_id%3A%20%225cd86aff743e735b05b3add3%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteMedia(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20media_id%3A%20%225cd86aff743e735b05b3add3%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addExtension
`Coming soon!`
```
addExtension(bucket_slug, input)
```

### deleteExtension

```
deleteExtension(bucket_slug, extension_id)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteExtension(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20extension_id%3A%20%2202df8060-74e7-11e9-abec-d97ef8131b2b%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteExtension(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20extension_id%3A%20%2202df8060-74e7-11e9-abec-d97ef8131b2b%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>


## Examples

### Node.js
The following example will get 2 Blog Posts from the Bucket Simple React Blog.
1. Install [`axios`](https://www.npmjs.com/package/axios)
```
npm install axios
```
2. Add the following code to a file titled `index.js`
```javascript
const axios = require('axios')
axios.post('https://graphql.cosmicjs.com/v1', {
  query: `{ 
    getObjects(
      bucket_slug: "simple-react-blog",
      input: { type: "posts", limit: 2 }
    ){
      title
    }
  }`
})
.then(function (response) {
  const objects = response.data.data.getObjects
  console.log(objects)
})
.catch(function (error) {
  console.log(error)
});
```
3. Run the following command
```
node index.js
```

### Ajax
Get one Object using client-side AJAX method.

<iframe width="100%" height="550" src="//jsfiddle.net/3kuy6s9f/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
