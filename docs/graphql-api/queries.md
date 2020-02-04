# Queries

::: tip Quick Tip
For a quick reference to this endpoint click the "Developer Tools" button on your Objects table view in your [Bucket Dashboard ](https://app.cosmicjs.com/login).

<a href="https://app.cosmicjs.com/login" target="_blank"><img src="https://cdn.cosmicjs.com/6647c4e0-3c93-11ea-93e2-f96724e61d4d-dev-tools-btn.png" width="170"/></a>
:::

## getObjects
Get Objects from a Bucket.

```
getObjects(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getObjects%28%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20%29%20%7B%0A%20%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20content%0A%20%20%20%20%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getObjects%28%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20%29%20%7B%0A%20%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20content%0A%20%20%20%20%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>


## getObject
Get a single Object from a Bucket.
```
getObject(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getObjectRevisions
Get Object Revisions from a Bucket.

```
getObjectRevisions(bucket_slug, object_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getObjectRevisions%28%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20object_slug%3A%20%22a-wonderful-blog-post-about-earth%22%0A%20%20%29%20%7B%0A%20%20%20%20%20revisions%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20content%0A%20%20%20%20%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getObjectRevisions%28%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20object_slug%3A%20%22a-wonderful-blog-post-about-earth%22%0A%20%20%29%20%7B%0A%20%20%20%20%20revisions%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20content%0A%20%20%20%20%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getMedia
Get Media from a Bucket.
```
getMedia(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getMedia%28bucket_slug%3A%20%22simple-vue-blog%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%09limit%3A%202%0A%20%20%09%7D%0A%20%20%29%20%7B%0A%20%20%20%20media%20%7B%0A%20%20%20%20%09url%0A%20%20%09%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getMedia%28bucket_slug%3A%20%22simple-vue-blog%22%2C%0A%20%20%20%20input%3A%20%7B%0A%20%20%20%20%09limit%3A%202%0A%20%20%09%7D%0A%20%20%29%20%7B%0A%20%20%20%20media%20%7B%0A%20%20%20%20%09url%0A%20%20%09%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getObjectTypes
Get Object Types from a Bucket.
```
getObjectTypes(bucket_slug, input)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getBucket
Get all Bucket content.
```
getBucket(bucket_slug)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getAccessToken
Get token for account-related access (not required for Bucket-level access).
```
getAccessToken(email, password)
```

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getBuckets
Get all Buckets on your user account.
```
getBuckets()
```

Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getBuckets%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getBuckets%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getUsers
Get Users in a Bucket.
```
getUsers(bucket_slug)
```

Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getUsers(bucket_slug%3A%20%22art%22)%20%7B%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getUsers(bucket_slug%3A%20%22art%22)%20%7B%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

### getUser
Get a User in a Bucket.
```
getUser(bucket_slug, user_id)
```

Requires `Authorization` in HTTP Header. Find token in Account Settings or using the `getAccessToken` method.

### Try it
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getUser(bucket_slug%3A%20%22art%22%2C%20user_id%3A%20%2256d66b2f903a79b904000001%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v2&query=%7B%0A%20%20getUser(bucket_slug%3A%20%22art%22%2C%20user_id%3A%20%2256d66b2f903a79b904000001%22)%20%7B%0A%20%20%20%20_id%0A%20%20%20%20first_name%0A%20%20%20%20email%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>
