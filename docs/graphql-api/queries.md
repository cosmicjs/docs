# Queries

## getObjects
```
getObjects(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>


## getObject
```
getObject(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObject(bucket_slug%3A%20%22simple-react-blog%22%2C%20input%3A%20%7B%20slug%3A%20%22a-wonderful-blog-post-about-earth%22%7D)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getMedia
```
getMedia(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getMedia(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20url%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getObjectTypes
```
getObjectTypes(bucket_slug, input)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjectTypes(bucket_slug%3A%20%22simple-vue-blog%22)%20%7B%0A%20%20%20%20title%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getBucket

```
getBucket(bucket_slug)
```

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getBucket(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20)%20%7B%0A%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20slug%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getAccessToken

```
getAccessToken(email, password)
```
**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D)**

<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getAccessToken(email%3A%20%22joe%40joes.com%22%2C%20password%3A%20%22myCatIsTheBest%22)%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## getBuckets

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
