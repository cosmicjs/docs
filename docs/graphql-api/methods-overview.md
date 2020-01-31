# Methods Overview

## Queries

In GraphQL terminolgy, `queries` perform read actions on API resources.
| Method  | Description | Authentication Required |
| ---------- | -------- | -------- |
| [getObjects](/graphql-api/queries.html#getobjects) | Get Objects from a Bucket | |
| [getObject](/graphql-api/queries.html#getobject) | Get a single Object from a Bucket | |
| [getObjectRevisions](/graphql-api/queries.html#getObjectRevisions) | Get a single Object from a Bucket | |
| [getMedia](/graphql-api/queries.html#getmedia) | Get Media from a Bucket | |
| [getObjectTypes](/graphql-api/queries.html#getobjecttypes) | Get Object Types from a Bucket | |
| [getBucket](/graphql-api/queries.html#getbucket) | Get all Bucket content | |
| [getAccessToken](/graphql-api/queries.html#getaccesstoken) | Get token for account-related access (not required for Bucket-level access) |
| [getBuckets](/graphql-api/queries.html#getbuckets) | Get all Buckets on your user account | yes |
| [getUsers](/graphql-api/queries.html#getusers) | Get Users in a Bucket | yes |
| [getUser](/graphql-api/queries.html#getuser) | Get a User in a Bucket | yes |

## Mutations

In GraphQL terminolgy, `mutations` perform write, edit, or delete actions on API resources.
| Method  | Description | Authentication Required |
| ---------- | -------- | -------- |
| [addObject](/graphql-api/mutations.html#addobject) | Add an Object to your Bucket | |
| [editObject](/graphql-api/mutations.html#editobject) | Edit an Object in your Bucket | |
| [deleteObject](/graphql-api/mutations.html#deleteobject) | Delete an Object in your Bucket | |
| [addObjectType](/graphql-api/mutations.html#addobjecttype) | Add an Object Type to your Bucket | |
| [editObjectType](/graphql-api/mutations.html#editobjecttype) | Edit an Object Type in your Bucket | |
| [deleteObjectType](/graphql-api/mutations.html#deleteobjecttype) | Delete an Object Type in your Bucket | |
| [addBucket](/graphql-api/mutations.html#addbucket) | Add a Bucket to your user account | yes |
| [deleteBucket](/graphql-api/mutations.html#deletebucket) | Delete a Bucket from your user account | yes |
| [importBucket](/graphql-api/mutations.html#importbucket) | Import a Bucket on your user account | yes |
| [addUser](/graphql-api/mutations.html#adduser) | Add a user to your Bucket | yes |
| [addWebhook](/graphql-api/mutations.html#addwebhook) | Add a Webhook to your Bucket | yes |
| [deleteWebhook](/graphql-api/mutations.html#deletewebhook) | Delete a Webhook in your Bucket | yes |
| [addMedia](/graphql-api/mutations.html#addmedia) | `Coming soon` | yes |
| [deleteMedia](/graphql-api/mutations.html#deletemedia) | Delete Media from your Bucket | yes |
| [addExtension](/graphql-api/mutations.html#addextension) | `Coming soon` | yes |
| [deleteExtension](/graphql-api/mutations.html#deleteextension) | Delete an Extension in your Bucket | yes |
