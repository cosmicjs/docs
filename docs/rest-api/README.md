---
sidebarDepth: 1
---

# Cosmic JS REST API

The Cosmic JS REST API and available clients help you manage content for your websites and applications. We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application (though you should never expose your private keys or credentials in any public website's client-side code). JSON is returned by all API responses, including errors.

The API is fully CRUD capable, allowing you to perform Create, Read, Update, and Delete requests to your Cosmic JS Buckets. 

::: tip Quick Tip
For a quick reference to get content from your Bucket, click the "Developer Tools" button found on select pages in your [Bucket Dashboard ](https://app.cosmicjs.com/login).

<a href="https://app.cosmicjs.com/login" target="_blank"><img src="https://cdn.cosmicjs.com/6647c4e0-3c93-11ea-93e2-f96724e61d4d-dev-tools-btn.png" width="170"/></a>
:::

## Getting Started

[Create a Cosmic JS account](https://app.cosmicjs.com/signup) and get familiar with the Cosmic JS Dashboard.

## API Endpoint
You can make direct calls to the REST API from the following base URL. Current version is `v1`.
```
https://api.cosmicjs.com/v1
```

## Status Check
You can check on the API system status via the [Cosmic JS status page](https://cosmicjs.statuspage.io/) and via the following endpoint:
```
https://api.cosmicjs.com/status
```

## Node.js Installation
Install the [Cosmic JS NPM Module](https://www.npmjs.com/package/cosmicjs) to follow examples using Node.js
```bash
npm i cosmicjs
```

### Terms

These docs assume you understand the core concepts of Cosmic JS including Buckets, Object Types and Objects. For a brief overview of these terms, see the [Getting Started guide](https://cosmicjs.com/getting-started).
