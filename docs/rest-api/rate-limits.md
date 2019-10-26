# Rate Limits
All Cosmic JS Buckets have a rate limit of `500` API requests per second per IP address. This only applies to non-cached API requests. Non-cached API requests include any initial `GET` request, all `POST`, `PUT`, `PATCH`, and `DELETE` requests to the API. This does not apply to any files or images served via the Cosmic JS CDN or imgix CDN. 

All Cosmic JS `POST` requests have a body size limit of 6 MB including media uploads. This does not apply to media uploaded via the Cosmic JS Dashboard. 