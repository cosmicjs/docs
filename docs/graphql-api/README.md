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
https://graphql.cosmicjs.com/v2
```

## Playground
Use the playground for a full interactive demonstration. Use the "Docs" and "Schema" buttons on the right side for documentation on models, queries, inputs, and descriptions.

**[Full screen&nbsp;&nbsp;](https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getObjects%28%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20%29%20%7B%0A%20%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20content%0A%20%20%20%20%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D)**
<iframe src="https://cosmic-graphql-playground.netlify.com/?endpoint=https%3A%2F%2Fgraphql.cosmicjs.com%2Fv2&query=%7B%0A%20%20getObjects%28%0A%20%20%20%20bucket_slug%3A%20%22simple-react-blog%22%2C%0A%20%20%20%20input%3A%20%7B%20%0A%20%20%20%20%20%20type%3A%20%22posts%22%0A%20%20%20%20%7D%0A%20%20%29%20%7B%0A%20%20%20%20%20objects%20%7B%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20content%0A%20%20%20%20%7D%0A%20%20%20%20total%0A%20%20%7D%0A%7D" frameborder="0" style="width: 100%; height: 470px;"></iframe>

## Changelog
### v2
New Queries:
-  `getObjectRevisions`: gets Object Revisions
-  `addObjectRevision`: adds an Object Revision

New query format:
- `getObjects` requires a new query format. Now includes params `limit`, `total`, and `skip`.
- `getMedia` requires a new query format. Now includes params `limit`, `total`, and `skip`.

[View previous version docs here](/graphql-api/previous-versions#v1).