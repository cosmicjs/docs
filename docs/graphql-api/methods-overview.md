# Methods Overview

## Queries

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

## Mutations

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
