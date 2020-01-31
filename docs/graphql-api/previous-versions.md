# Previous Versions
If you are still running a previous version, it is recommended to switch to the latest (currently `v2`) as fixes and updates will no longer be made to older versions.

## v1 - Queries

::: tip Quick Tip
For a quick reference to this endpoint click the "Developer Tools" button on your Objects table view in your [Bucket Dashboard ](https://app.cosmicjs.com/login).

<a href="https://app.cosmicjs.com/login" target="_blank"><img src="https://cdn.cosmicjs.com/6647c4e0-3c93-11ea-93e2-f96724e61d4d-dev-tools-btn.png" width="170"/></a>
:::

### getObjects
Get Objects from a Bucket.

```
getObjects(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>


### getObject
Get a single Object from a Bucket.
```
getObject(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getMedia
Get Media from a Bucket.
```
getMedia(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getObjectTypes
Get Object Types from a Bucket.
```
getObjectTypes(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getBucket
Get all Bucket content.
```
getBucket(bucket_slug)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getAccessToken
Get token for account-related access (not required for Bucket-level access).
```
getAccessToken(email, password)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getBuckets
Get all Buckets on your user account.
```
getBuckets()
```

Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBuckets%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBuckets%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getUsers
Get Users in a Bucket.
```
getUsers(bucket_slug)
```

Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUsers(bucket_slug%3A%20%22art%22)%20%7B%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUsers(bucket_slug%3A%20%22art%22)%20%7B%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getUser
Get a User in a Bucket.
```
getUser(bucket_slug, user_id)
```

Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUser(bucket_slug%3A%20%22art%22%2C%20user_id%3A%20%2256d66b2f903a79b904000001%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getUser(bucket_slug%3A%20%22art%22%2C%20user_id%3A%20%2256d66b2f903a79b904000001%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>






## v1 - Mutations

### addObject
Add an Object to your Bucket.

```
addObject(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### editObject
Edit an Object in your Bucket.

```
editObject(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20slug%3A%20%22post-title%22%2C%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20EDITED%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20slug%3A%20%22post-title%22%2C%0A%20%20%20%20%20%20title%3A%20%22Post%20Title%22%2C%0A%20%20%20%20%20%20type_slug%3A%20%22posts%22%2C%0A%20%20%20%20%20%20content%3A%20%22This%20is%20my%20EDITED%20post%20content%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteObject
Delete an Object in your Bucket.

```
deleteObject(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20object_slug%3A%20%22post-title%22)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObject(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20object_slug%3A%20%22post-title%22)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addObjectType
Add an Object Type to your Bucket.

```
addObjectType(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### editObjectType
Edit an Object Type in your Bucket.

```
editObjectType(bucket_slug)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%20EDITED%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20editObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%20EDITED%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%2C%0A%20%20%20%20%20%20singular%3A%20%22page%22%2C%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteObjectType
Delete an Object Type in your Bucket.

```
deleteObjectType(bucket_slug, type_slug)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20type_slug%3A%20%22pages%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteObjectType(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20type_slug%3A%20%22pages%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addBucket
Add a Bucket to your user account.

```
addBucket(input)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addBucket(%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22My%20New%20Bucket%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20slug%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addBucket(%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22My%20New%20Bucket%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20slug%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteBucket
Delete a Bucket from your user account.

```
deleteBucket(bucket_id)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteBucket(%0A%20%20%20%20bucket_id%3A%20%225cd8658c1287fc5d8e3ef1d8%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteBucket(%0A%20%20%20%20bucket_id%3A%20%225cd8658c1287fc5d8e3ef1d8%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### importBucket
Import a Bucket on your user account.

```
importBucket(bucket_id, title, object_types, objects, media, media_folders, webhooks, extensions)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20importBucket(%0A%20%20%20%20bucket_id%3A%20%225cd4b0fa7942c32cf73b0751%22%2C%0A%20%20%20%20object_types%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20importBucket(%0A%20%20%20%20bucket_id%3A%20%225cd4b0fa7942c32cf73b0751%22%2C%0A%20%20%20%20object_types%3A%20%7B%0A%20%20%20%20%20%20title%3A%20%22Pages%22%2C%0A%20%20%20%20%20%20slug%3A%20%22pages%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addUser
Add a user to your Bucket.

```
addUser(bucket_slug, input)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addUser(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20email%3A%20%20%22someguy%40test.com%22%2C%0A%20%20%20%20%20%20role%3A%20editor%2C%0A%20%20%20%20%20%20first_name%3A%20%22Test%22%2C%0A%20%20%20%20%20%20last_name%3A%20%22User%22%0A%20%20%20%20%7D%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addUser(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20email%3A%20%20%22someguy%40test.com%22%2C%0A%20%20%20%20%20%20role%3A%20editor%2C%0A%20%20%20%20%20%20first_name%3A%20%22Test%22%2C%0A%20%20%20%20%20%20last_name%3A%20%22User%22%0A%20%20%20%20%7D%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addWebhook
Add a Webhook to your Bucket.

```
addWebhook(input)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20event%3A%20objectCreatedPublished%2C%0A%20%20%20%20%20%20endpoint%3A%20%22https%3A%2F%2Fgoogle.com%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20id%0A%20%20%20%20event%0A%20%20%20%20endpoint%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20addWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%20%20event%3A%20objectCreatedPublished%2C%0A%20%20%20%20%20%20endpoint%3A%20%22https%3A%2F%2Fgoogle.com%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20id%0A%20%20%20%20event%0A%20%20%20%20endpoint%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### deleteWebhook
Delete a Webhook in your Bucket.

```
deleteWebhook(bucket_slug, webhook_id)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20webhook_id%3A%20%22adb967e0-74e6-11e9-b625-814d295027b3%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteWebhook(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20webhook_id%3A%20%22adb967e0-74e6-11e9-b625-814d295027b3%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addMedia
`Coming soon!`
```
addMedia(bucket_slug, input)
```

### deleteMedia
Delete Media from your Bucket.

```
deleteMedia(bucket_slug, media_id)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteMedia(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20media_id%3A%20%225cd86aff743e735b05b3add3%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteMedia(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20media_id%3A%20%225cd86aff743e735b05b3add3%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### addExtension
`Coming soon!`
```
addExtension(bucket_slug, input)
```

### deleteExtension
Delete an Extension in your Bucket.

```
deleteExtension(bucket_slug, extension_id)
```
Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteExtension(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20extension_id%3A%20%2202df8060-74e7-11e9-abec-d97ef8131b2b%22%0A%20%20)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=mutation%20%7B%0A%20%20deleteExtension(%0A%20%20%20%20bucket_slug%3A%20%22graphql-bucket%22%2C%0A%20%20%20%20extension_id%3A%20%2202df8060-74e7-11e9-abec-d97ef8131b2b%22%0A%20%20)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>