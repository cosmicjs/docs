# Webhooks

## Add Webhook

Webhooks send a POST request to the endpoint of your choice when the event occurs. The data payload in the same fomat as Object and Media. Read more about Webhooks including the payload sent to the endpoint on the [Webhooks documentation page](/webhooks).

| Parameter | Required | Type   | Description                                                                                                                                              |
| --------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| event     | required | Enum   | object.created.draft, object.created.published, object.edited.draft, object.edited.published, object.deleted, media.created, media.edited, media.deleted |
| endpoint  | required | String | The endpoint that will receive the data                                                                                                                  |
| write_key |          | String | Your Bucket write key                                                                                                                                    |

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
  "endpoint": "http://my-listener.com",
  "write_key": "your-key-added-in-bucket-settings"
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
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
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

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type   | Description           |
| --------- | -------- | ------ | --------------------- |
| write_key |          | String | Your Bucket write key |

:::: tabs :options="{ useUrlFragment: false }"

::: tab Bash
**Definition**

```
DELETE https://api.cosmicjs.com/v1/:bucket_slug/webhooks/:webhook_id
```

**Example Request**

```json
{
  "write_key": "your-key-added-in-bucket-settings"
}
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
const bucket = Cosmic.bucket({
  slug: 'bucket-slug',
  write_key: ''
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
