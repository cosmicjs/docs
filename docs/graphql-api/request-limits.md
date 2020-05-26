# Request Limits
### Rate Limits
All Cosmic Buckets have a rate limit of `500` API requests per second per IP address. This only applies to non-cached API requests. Non-cached API requests include any initial `GET` request, all `POST`, `PUT`, `PATCH`, and `DELETE` requests to the API. This does not apply to any files or images served via the Cosmic CDN or imgix CDN. 

### Size Limits
All Cosmic `POST` requests have a body size limit of `6MB`. At this time media cannot be uploaded via the GraphQL API.

### Optimizations
All requests allow `gzip` ecoding. If connecting to the API directly, adding `Accept-Encoding: gzip` can dramatically reduce response time and size. This is added by default on all Cosmic open source clients.