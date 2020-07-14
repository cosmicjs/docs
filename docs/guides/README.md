# Guides
Use the Cosmic guides to get started using select development libraries.

## Pre-steps
Before doing any coding, let's set up a Bucket with content using the following steps:
1. Log in to your [Cosmic account](https://app.cosmicjs.com) and Create a new Bucket.
2. Add a new Object Type called `Blog`. Add optional Metafields to extend the content model. For brevity, we'll omit the Metafields and show you the basic steps to connect to your content.
3. Add a few Blog Objects by clicking "+ Add New Blog" and fill out the `title`, `slug`, and `content` fields.

## React
Cosmic makes a great [React CMS](https://www.cosmicjs.com/knowledge-base/react-cms) for your React websites and apps. Get started adding Cosmic-powered content into your React apps using the following steps:

### 1. Install a new React App using Create React App
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

## Vue.js

## Next.js

## Nuxt.js

## Gatsby.js