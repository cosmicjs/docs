
# Webhooks

### Add Webhook

Sends a POST request to the endpoint of your choice when the event occurs. The data payload in the same fomat as Object and Media. Read more about Webhooks including the payload sent to the endpoint on the [Webhooks documentation page](/webhooks).

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
|event|	required|	Enum|	object.created.draft, object.created.published, object.edited.draft, object.edited.published, object.deleted, media.created, media.edited, media.deleted |
|endpoint|	required|	String	|The endpoint that will receive the data|
|write_key	|	|String|	Your Bucket write key|

### Delete a Webhook

If a write key is enabled on the requested bucket, the parameter `write_key` will need to be present.

| Parameter | Required | Type | Description |
| --------- | -------- | ---- | ----------- |
| write_key | | String | Your Bucket write key |
