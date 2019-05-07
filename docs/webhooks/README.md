# CosmicJS Webhooks

Cosmic JS makes it easy to add Webhooks to trigger a POST request to the endpoint of your choice when an event occurs in your Bucket. This is great for integrating static site rebuilds whenever content is changed, or adding third-party integrations like notifying your team on Slack whenever content has been added.

## Format

All requests to your endpoint are sent via POST with the following Body:

```json
{
  "type": Event(String),
  "created_at": Date(String),
  "data": Object(object, media)
}
```

## Events

This is a list of available events. We will add to this list as more features become available.

| Event                    | Occurs When                              |
| ------------------------ | ---------------------------------------- |
| object.created.draft     | Object created and set to draft.         |
| object.created.published | Object created and published.            |
| object.edited.draft      | Existing Object edited and set to draft. |
| object.edited.published  | Existing Object edited and published.    |
| object.deleted           | Object deleted.                          |
| media.created            | Media created.                           |
| media.edited             | Media edited.                            |
| media.deleted            | Media deleted.                           |

### Getting Started

Manage Webhooks in your Bucket by logging in and going to the Webhooks section in your Bucket located at:

- Your Bucket Dashboard > Webhooks

## Testing

Using a service like [Beeceptor](https://beeceptor.com/) makes it easy to test your Webhooks and view response data.
