# Guides
Use the Cosmic guides to get started using select development libraries.

## Pre-steps
Before doing any coding, let's set up a Bucket with content using the following steps:
1. Log in to your [Cosmic account](https://app.cosmicjs.com) and Create a new Bucket.
2. Add a new Object Type called `Blog`. Add optional Metafields to extend the content model. For brevity, we'll omit the Metafields and show you the basic steps to connect to your content.
3. Add a few Blog Objects by clicking "+ Add New Blog" and fill out the `title`, `slug`, and `content` fields.

## React
Cosmic makes a great [React CMS](https://www.cosmicjs.com/knowledge-base/react-cms) for your React websites and apps. Get started adding Cosmic-powered content into your React apps using the following steps:

### 1. Install a new React app
You can use [Create React App](https://github.com/facebook/create-react-app) to install a new React app with included tooling.
```bash
npm i -g creact-react-app
creact-react-app cosmic-react-app
```
### 2. Install the Cosmic NPM module
```bash
cd cosmic-react-app
npm i cosmicjs
```
### 3. Add the following code into your `src/App.js` file
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// src/App.js
import React, { useState, useEffect } from 'react'

const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'YOUR_BUCKET_SLUG',
  read_key: 'YOUR_BUCKET_READ_KEY'
})

function App() {
  // Use Hooks to get page data from Cosmic!
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      const data = await bucket.getObjects({
        type: 'blog',
        props: 'slug,title,content,metadata' // Limit the API response data by props
      })
      setData(data)
    };
    fetchBlog()
  }, []);
  if (!data)
    return <div>Loading...</div>
  const posts = data.objects
  return <div>
    { posts.map(post => <div key={post.slug}>{post.title}</div>) }
  </div>
}
export default App;

```

### 4. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
cd cosmic-react-app
yarn start
```

## Angular

## Node.js
Cosmic makes a great [Node.js CMS](https://www.cosmicjs.com/knowledge-base/nodejs-cms) for your Node.js websites and apps. Get started adding Cosmic-powered content into your Node.js apps using the following steps:

### 1. Install Express
You can use the popular [Express](https://github.com/facebook/create-react-app) website framework to get a Node.js Cosmic website up and running quickly. Start by creating a project folder and installing Express and Cosmic.
```bash
mkdir cosmic-node-app
cd cosmic-node-app
npm i express cosmicjs
```
### 4. Create an `index.js` file
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// index.js
const express = require('express')
const app = express()
const Cosmic = require('cosmicjs')
const api = Cosmic()
const PORT = process.env.PORT || 3000
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: '13ba57b0-a4d5-11ea-aafe-77788bb7b791',
  read_key: '7e84VE6IPBx3zncqcAYSoS1gDEPfPRQnZs6yLv3OZwfiR0YsyT'
})
app.get('*', async (req, res) => {
  const data = await bucket.getObjects({
    type: 'posts',
    props: 'slug,title,content,metadata' // Limit the API response data by props
  })
  res.json(data)
})
app.listen(PORT, () => { 
  console.log('Your Cosmic app is running at http://localhost:' + PORT)
})
```

### 4. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
node index.js
```

## Vue.js

## Next.js

## Nuxt.js

## Gatsby.js