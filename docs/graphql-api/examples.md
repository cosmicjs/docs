# Examples

## Node.js

The following example will get 2 Blog Posts from the Bucket Simple React Blog.

1. Install [`axios`](https://www.npmjs.com/package/axios)

```
npm install axios
```

2. Add the following code to a file titled `index.js`

```javascript
const axios = require('axios')
axios.post('https://graphql.cosmicjs.com/v1', {
  query: `{ 
    getObjects(
      bucket_slug: "simple-react-blog",
      input: { type: "posts", limit: 2 }
    ){
      title
    }
  }`
})
.then(function (response) {
  const objects = response.data.data.getObjects
  console.log(objects)
})
.catch(function (error) {
  console.log(error)
});
```

3. Run the following command

```
node index.js
```

### Ajax

Get one Object using client-side AJAX method.

<iframe width="100%" height="550" src="//jsfiddle.net/3kuy6s9f/embedded/js,html,result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
