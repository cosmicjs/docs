---
sidebarDepth: 2
---

# Cosmic JS GraphQL API

Welcome to the Cosmic JS GraphQL documentation. Learn about all of the features and methods to perform `queries` and `mutations` on your Bucket content.

## API Endpoint
All `queries` and `mutations` are called to the Cosmic JS GraphQL endpoint:

```
https://graphql.cosmicjs.com/v1
```
## Playground
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObjects(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20type%3A%20%22posts%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**
<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObjects(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20type%3A%20%22posts%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## Methods Overview
### Queries
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
| Method  | Description | Authentication Required |
| ---------- | -------- | -------- |
| addBucket | Add Bucket to your user account | yes |
| deleteBucket | Delete Bucket from your user account | yes |
| importBucket | Import Bucket on your user account | yes |
| addExtension | `Coming soon` | yes |
| deleteExtension | Delete an Extension in your Bucket | yes |
| addMedia | `Coming soon` | yes |
| deleteMedia | Delete Media from your Bucket | yes |
| addUser | Add user to your Bucket | yes |
| addObjectType | Add Object Type to your Bucket | yes |
| editObjectType | Edit Object Type on your Bucket | yes |
| deleteObjectType | Delete Object Type on your Bucket | yes |
| addObject | Add Object to your Bucket | |
| editObject | Edit Object in a Bucket | |
| deleteObject | Delete Object in a Bucket | |
| addWebhook | Add Webhook to your Bucket | yes |
| deleteWebhook | Delete Webhook in your Bucket | yes |



## Queries

### getObjects
```
getObjects(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObjects(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20type%3A%20%22posts%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObjects(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20type%3A%20%22posts%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>


### getObject
```
getObject(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getMedia
```
getMedia(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getObjectTypes
```
getObjectTypes(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getAccessToken

```
getAccessToken(email, password)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicstaging.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### AJAX

Get one Object using client-side AJAX method.

<iframe width="100%" height="550" src="//jsfiddle.net/WQXXT/4476/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
