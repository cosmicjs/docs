# Webhooks
Webhooks send a POST request to the endpoint of your choice when the specific event occurs. The data payload in the same fomat as Object and Media. Read more about Webhooks including the payload sent to the endpoint on the [Webhooks documentation page](/webhooks).


## Add Webhook

Your authorization token in the header is required.

| Parameter | Required | Type   | Description                                                                                                                                              |
| --------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| event     | required | Enum   | object.created.draft, object.created.published, object.edited.draft, object.edited.published, object.deleted, media.created, media.edited, media.deleted |
| endpoint  | required | String | The endpoint that will receive the data                                                                                                                  |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
POST https://api.cosmicjs.com/v1/:bucket_slug/webhooks
```

**Example Request**

```json
{
  "event": "object.created.published",
  "endpoint": "http://my-listener.com"
}
```

**Example Response**

```json
{
  "webhook": {
    "id": "e39b2480-f043-11e7-ba08-234e3fae7762",
    "title": "Object created and published",
    "event": "object.created.published",
    "endpoint": "http://my-listener.com"
  }
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.addWebhooks()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // optional
})
const bucket = Cosmic.bucket({
  slug: 'bucket-slug'
})
bucket.addWebhook({
  event: 'object.created.published',
  endpoint: 'http://my-listener.com'
})
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "webhook": {
    "id": "e39b2480-f043-11e7-ba08-234e3fae7762",
    "title": "Object created and published",
    "event": "object.created.published",
    "endpoint": "http://my-listener.com"
  }
}
```

:::

::::

## Get Webhooks

Get webhooks in your Bucket. Authentication token is required in the header (see Authentication section). Must have admin level access.

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
GET https://api.cosmicjs.com/v1/:bucket_slug/webhooks
```

**Example Request**

```bash
curl "https://api.cosmicjs.com/v1/creative-agency/webhooks" \
-H "Authorization: Bearer <ACCESS_TOKEN>"
```

**Example Response**

```json
{
  "webhooks": [
    {
      "title": "Object created and published",
      "event": "object.created.published",
      "endpoint": "http://your-endpoint.com/webhook-listener"
    },
    {
      "title": "Object edited and unpublished",
      "event": "object.created.unpublished",
      "endpoint": "http://your-endpoint.com/webhook-listener"
    }
  ],
  "total": 2
}
```

:::

::: tab Node.js
**Definition**

```js
bucket.getWebhooks()
```

**Example Request**

```js
const bucket = Cosmic.bucket({
  slug: 'bucket-slug'
})
bucket.getWebhooks()
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "webhooks": [
    {
      "title": "Object created and published",
      "event": "object.created.published",
      "endpoint": "http://your-endpoint.com/webhook-listener"
    },
    {
      "title": "Object edited and unpublished",
      "event": "object.created.unpublished",
      "endpoint": "http://your-endpoint.com/webhook-listener"
    }
  ],
  "total": 2
}
```

:::

::::


## Delete a Webhook

The webhook id and authorization token in the header are required.

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/webhooks/:webhook_id
```

**Example Response**

```json
{
  "status": "200",
  "message": "Webhook deleted."
}
```

:::

::: tab Node.js
**Definition**

```js
Cosmic.deleteWebhook()
```

**Example Request**

```js
const Cosmic = require('cosmicjs')({
  token: 'your-token-from-auth-request' // optional
})
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
})
bucket.deleteWebhook({
  id: 'c62defe0-5f93-11e7-8054-873245f0e98d'
})
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
})
```

**Example Response**

```json
{
  "status": "200",
  "message": "Webhook deleted."
}
```

:::

::::
