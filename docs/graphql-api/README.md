# Cosmic JS GraphQL API

Welcome to the Cosmic JS GraphQL documentation. Learn about all of the features and methods to perform `queries` and `mutations` on your Bucket content.

The API is fully CRUD capable, allowing you to perform Create, Read, Update, and Delete requests to your Cosmic JS Buckets.

::: tip Quick Tip
For a quick reference to get content from your Bucket, click the "Developer Tools" button found on select pages in your [Bucket Dashboard ](https://app.cosmicjs.com/login).

<a href="https://app.cosmicjs.com/login" target="_blank"><img src="https://cdn.cosmicjs.com/6647c4e0-3c93-11ea-93e2-f96724e61d4d-dev-tools-btn.png" width="170"/></a>
:::

## API Endpoint

All `queries` and `mutations` are called to the Cosmic JS GraphQL endpoint:

```
https://graphql.cosmicjs.com/v1
```
To access the legacy endpoint: `https://graphql-legacy.cosmicjs.com/v1`

## Playground

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D)**
<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https://graphql.cosmicjs.com/v1&query=%7B%0A%20%20getObjects(%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20title%0A%20%20%20%20content%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>