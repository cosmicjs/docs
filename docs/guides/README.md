# Guides
Use the following guides to get started using Cosmic with select development libraries.

## Initial Setup
Before doing any coding, let's set up a Bucket with content using the following steps:
1. Create or log in to your [Cosmic account](https://app.cosmicjs.com)
2. Install the [Simple Blog](https://www.cosmicjs.com/apps/simple-blog) by clicking "Select App" then following the steps to create a new Bucket with the demo content. Alternatively, you could start by creating a new Bucket from scratch and add an Object Type titled `Posts` that has the slug `posts` and add a File Metafield titled `Hero` with key `hero`. Then add a few Objects with your own demo content.

Now that we have some demo content, we can integrate the content using the following development tools.

## React
[React](https://reactjs.org/) is a component-based JavaScript library for building user interfaces.

Cosmic makes a great [React CMS](https://www.cosmicjs.com/knowledge-base/react-cms) for your React websites and apps. Get started adding Cosmic-powered content into your React apps using the following steps:

### 1. Install a new React app
You can use [Create React App](https://github.com/facebook/create-react-app) to install a new React app that includes tooling and configurations.
```bash
npm i -g create-react-app
create-react-app cosmic-react-app
```
### 2. Install the Cosmic NPM module
```bash
cd cosmic-react-app
yarn add cosmicjs
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
        type: 'posts',
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
    { posts.map(post => 
      <div key={post.slug} style={{marginBottom: 20}}>
        {
          post.metadata.hero &&
          <div><img alt="" src={`${post.metadata.hero.imgix_url}?w=400`}/></div>
        }
        <div>{post.title}</div>
      </div>)
    }
  </div>
}
export default App;
```

### 4. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
npm start
```

## Node.js
[Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript server-side.

Cosmic makes a great [Node.js CMS](https://www.cosmicjs.com/knowledge-base/nodejs-cms) for your Node.js websites and apps. Get started adding Cosmic-powered content into your Node.js apps using the following steps:

### 1. Install Express
You can use the popular [Express](https://expressjs.com) website framework to get a Node.js Cosmic website up and running quickly. Start by creating a project folder and installing Express and Cosmic.
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
  slug: 'YOUR_BUCKET_SLUG',
  read_key: 'YOUR_BUCKET_READ_KEY'
})
app.get('*', async (req, res) => {
  const data = await bucket.getObjects({
    type: 'posts',
    props: 'slug,title,content,metadata' // Limit the API response data by props
  })
  const posts = data.objects
  let markup = ``
  posts.map(post => {
    markup += `<div style="margin-bottom: 20px">
    <div><img alt="" src="${post.metadata.hero.imgix_url}?w=400"/></div>
    <div>${post.title}</div>
    </div>`
  })
  res.set('Content-Type', 'text/html')
  res.send(markup)
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
[Vue.js](https://vuejs.org/) is a progressive JavaScript framework for building user interfaces.

Cosmic makes a great [Vue CMS](https://www.cosmicjs.com/knowledge-base/vuejs-cms) for your Vue websites and apps. Get started adding Cosmic-powered content into your Vue apps using the following steps:

### 1. Install a new Vue app
You can use the [Vue CLI](https://cli.vuejs.org/) to install a new Vue app that includes tooling and configurations.
```bash
npm install -g @vue/cli
vue create cosmic-vue-app
```
### 2. Install the Cosmic NPM module
```bash
cd cosmic-vue-app
npm i cosmicjs
```
### 3. Add the following code into your `src/App.vue` file
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// src/App.vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Cosmic Vue App</h1>
    <div v-if="loading">Loading...</div>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <div>{{ post.title }}</div>
        <img alt="" :src="post.metadata.hero.imgix_url + '?w=400'"/>
      </li>
    </ul>
  </div>
</template>
<script>
const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'YOUR_BUCKET_SLUG',
  read_key: 'YOUR_BUCKET_READ_KEY'
})
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      posts: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      bucket.getObjects({
        type: 'posts',
        props: 'slug,title,content,metadata' // Limit the API response data by props
      }).then(data => {
        const posts = data.objects
        this.loading = false
        this.posts = posts
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
```

### 4. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
npm run serve
```

## Next.js
[Next.js](https://nextjs.org/) is a framework for building React websites and apps.

Cosmic makes a great [Next.js CMS](https://www.cosmicjs.com/knowledge-base/nextjs-cms) for your Next.js websites and apps. Get started adding Cosmic-powered content into your Next.js apps using the following steps:

### 1. Install a new Next.js app
You can use [Create Next App](https://nextjs.org/docs#setup) to install a new Next.js app that includes tooling and configurations. When prompted, select default starter app.
```bash
npm i -g create-next-app
create-next-app cosmic-next-app
```
### 2. Install the Cosmic NPM module
```bash
cd cosmic-next-app
npm i cosmicjs
```
### 3. Add the following code into your `pages/index.js` file
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// pages/index.js
import Head from 'next/head'
const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'YOUR_BUCKET_SLUG',
  read_key: 'YOUR_BUCKET_READ_KEY'
})
function Blog({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Cosmic App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts.map((post) => (
        <div key={post.slug}>
          <h3>{post.title}</h3>
          <img alt="" src={`${post.metadata.hero.imgix_url}?w=400`}/>
        </div>
      ))}
    </div>
  )
}
export async function getStaticProps() {
  const data = await bucket.getObjects({
    type: 'posts',
    props: 'slug,title,content,metadata' // Limit the API response data by props
  })
  const posts = await data.objects
  return {
    props: {
      posts,
    }
  }
}
export default Blog
```

### 4. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
npm run dev
```

## Nuxt.js
[Nuxt.js](https://nuxtjs.org/) is a framework for building Vue websites and apps.

Cosmic makes a great [Nuxt.js CMS](https://www.cosmicjs.com/knowledge-base/nuxtjs-cms) for your Nuxt.js websites and apps. Get started adding Cosmic-powered content into your Nuxt.js apps using the following steps:

### 1. Install a new Nuxt.js app
You can use [Create Nuxt App](https://github.com/nuxt/create-nuxt-app) to install a new Nuxt.js app that includes tooling and configurations.
```bash
npm i -g create-nuxt-app
create-nuxt-app cosmic-nuxt-app
```
### 2. Install the Cosmic NPM module
```bash
cd cosmic-nuxt-app
npm i cosmicjs
```
### 3. Add the following code into your `pages/index.vue` file
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// pages/index.vue
<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        cosmic-nuxt-app
      </h1>
      <div v-if="loading">Loading...</div>
      <div v-for="post in posts" :key="post.slug">
        <h3>{{ post.title }}</h3>
        <img alt="" :src="post.metadata.hero.imgix_url + '?w=400'"/>
      </div>
    </div>
  </div>
</template>
<script>
const Cosmic = require('cosmicjs')
const api = Cosmic()
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: 'YOUR_BUCKET_SLUG',
  read_key: 'YOUR_BUCKET_READ_KEY'
})
export default {
  data() {
    return {
      loading: true
    }
  },
  async asyncData () {
    const data = await bucket.getObjects({
      type: 'posts',
      props: 'slug,title,content,metadata' // Limit the API response data by props
    })
    const posts = await data.objects
    return { 
      posts,
      loading: false
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
```

### 4. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
npm run dev
```

## Gatsby
[Gatsby](https://gatsbyjs.org/) is a framework for building React websites and apps.

Cosmic makes a great [Gatsby CMS](https://www.cosmicjs.com/knowledge-base/gatsby-cms) for your Gatsby websites and apps. Get started adding Cosmic-powered content into your Gatsby apps using the following steps:

### 1. Install a new Gatsby app
You can use the Gatsby CLI to install a new Gatsby app that includes tooling and configurations.
```bash
npm install -g gatsby-cli
gatsby new cosmic-gatsby-app
```
### 2. Install the Cosmic source plugin for Gatsby
Install the [Cosmic source plugin for Gatsby](https://www.npmjs.com/package/gatsby-source-cosmicjs).
```bash
cd cosmic-gatsby-app
yarn add gatsby-source-cosmicjs
```
### 3. Add the following code into your `gatsby-config.js` file in the plugins section.
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-cosmicjs`,
    options: {
      bucketSlug: `YOUR_BUCKET_SLUG`, // Get this value in Bucket > Settings
      objectTypes: [`posts`], // Note it will result in GraphQL queries (allCosmicjsPosts, cosmicjsPosts)
      // If you have enabled read_key to fetch data (optional).
      apiAccess: {
        read_key: `YOUR_BUCKET_READ_KEY`, // Get this value in Bucket > Settings
      },
      localMedia: true // Download media locally for gatsby image (optional)
    }
  },
]
```

### 4. Add the following code into your `gatsby-node.js` file

```javascript
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get the single post layout file
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  // Query the GraphQL to get our posts
  const result = await graphql(
    `
      {
        allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
          edges {
            node {
              slug,
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allCosmicjsPosts.edges

  // For each post in posts create a separate page
  posts.forEach((post, index) => {
    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug
      },
    })
  })
}
```

### 5. Create `blog-post.js` in `src/templates/` directory and add following code

This is the layout for a single blog post page which we used in `gatsby-node.js` 

```javascript
import React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const post = data.cosmicjsPosts // get the post data from query

  // Render the post data  
  return (
    <article>
      <h1>{post.title}</h1>
      <small>{post.created}</small>
      <div><img alt="" src={`${post.metadata.hero.imgix_url}?w=400`}/></div>
      <section dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default BlogPostTemplate

// Query to get single Post where slug is equal
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    cosmicjsPosts(slug: { eq: $slug }) {
      id
      content
      title
      metadata {
        hero {
          imgix_url
        }
      }
      created(formatString: "MMMM DD, YYYY")
    }
  }
`
```

### 6. Edit `index.js` file in `src/pages/` directory and add following code

```javascript
import React from "react"
import { Link, graphql } from "gatsby"

const BlogIndex = ({ data }) => {
  const posts = data.allCosmicjsPosts.edges // getting all posts from query

  // Rendering list of posts with link to their url
  return (
    <div>
      {posts.map(({ node }) => {
        return (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h3>{node.title}</h3>
              <img alt="" src={`${node.metadata.hero.imgix_url}?w=400`}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BlogIndex

// Query all posts from GraphQL
export const pageQuery = graphql`
  query {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          slug
          title
          metadata {
            hero {
              imgix_url
            }
          }
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`
```



### 7. Start your app

Start your app, and go to http://localhost:8000. Dance 🎉
```
 yarn develop
```

## Angular

[Angular](https://angular.io/) is a JavaScript library for building user interfaces.

Cosmic makes a great [Angular CMS](https://www.cosmicjs.com/knowledge-base/angularjs-cms) for your Angular websites and apps. Get started adding Cosmic-powered content into your Angular apps using the following steps:

### 1. Install a new Angular app
Install the Angular CLI to create a project that includes tooling and configurations.
```bash
npm install -g @angular/cli
ng new cosmic-angular-app
```
### 2. Install the Cosmic NPM module
```bash
cd cosmic-angular-app
npm i cosmicjs
```
### 3. Add the following code into your `src/app/app.component.ts` file
Find your Bucket slug and API read key in <i>Your Bucket > Basic Settings > API Access</i> after [logging in](https://app.cosmicjs.com).
```javascript
// src/app/app.component.ts
import {Component, OnInit} from '@angular/core';
import Cosmic from 'cosmicjs';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
      <h1>Cosmic Angular App</h1>
      <div *ngIf="loading">Loading...</div>
      <ul>
        <li *ngFor="let post of posts">
          <div>{{ post.title }}</div>
          <img alt="" [src]="post.metadata.hero.imgix_url + '?w=400'"/>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent implements OnInit{
  title = 'cosmic-angular-app';
  bucket = null;
  loading = false;
  posts = [];

  constructor(
  ) {
    // Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
    this.bucket = Cosmic().bucket({
      slug: 'YOUR_BUCKET_SLUG',
      read_key: 'YOUR_BUCKET_READ_KEY'
    });
  }

  async ngOnInit() {
    this.loading = true;

    await this.bucket.getObjects({
      type: 'posts',
      props: 'slug,title,content,metadata' // Limit the API response data by props
    }).then((response) => {
      this.posts = response.objects;
    });

    this.loading = false;
  }
}
```
### 4. Edit `src/polyfills.ts` and add the following code
```javascript
// src/polyfills.ts
(window as any).process = {
    env: { DEBUG: undefined },
};
```
### 5. Start your app
Start your app, and go to http://localhost:4200. Dance 🎉
```
ng serve --open
```

## Ruby on Rails

[Ruby on Rails](https://rubyonrails.org/) is a server-sided framework written in Ruby, widely used by startups to iterate quickly.

Cosmic makes a great [Ruby on Rails CMS](https://www.cosmicjs.com/knowledge-base/ruby-on-rails-cms) for your Ruby on Rails websites and apps. Get started adding Cosmic-powered content into your Ruby on Rails apps using the following steps:

### 1. Create a new Ruby on Rails app
If you don't have Ruby on Rails installed on your machine, you may need to start with:
```
sudo gem install rails
```
and
```
gem install bundler
```
Create a new Ruby on Rails application by using the following commands in the terminal:
```bash
rails new cosmic-app
cd cosmic-app
rails db:create
rails db:migrate
```

### 2. Install HTTParty Gem to make HTTP Requests
In the `Gemfile`, add the following line of code to the bottom of the file:
```ruby
# Gemfile
gem 'httparty'
```
and to install the `HTTParty` gem run:
```
bundle install
```

### 3. Adding Cosmic Credentials to Rails app
To use your Read/Write Key and Slug of your Cosmic Bucket in a secure way in Rails, please run the following command on terminal:
```bash
EDITOR="vim" rails credentials:edit
````

Paste the following yml configuration in the text editor and save the file:
```yml
cosmic:
  slug: <add cosmic bucket slug here>
  read_key: <add cosmic bucket read key here>
```

### 4. Configure Autoloading for API Library
In `config/application.rb`, please add the following line in the class `Application < Rails::Application` to autoload API Wrapper when server starts. Add this line of code under `config.load_defaults`.
```ruby
# config/application.rb
config.autoload_paths << Rails.root.join('lib')
```

### 5. Add the code for the API Wrapper
Add a new file structure in the `lib` folder
```terminal
cd lib && mkdir api_wrappers && cd api_wrappers && mkdir cosmic && cd cosmic && touch objects_wrapper.rb

cd ../../..
```

In the newly created `lib/api_wrappers/cosmic/objects_wrapper.rb` file, paste the following code
```ruby
# lib/api_wrappers/cosmic/objects_wrapper.rb
module ApiWrappers
  module Cosmic
    class ObjectsWrapper
      BASE_URI = 'https://api.cosmicjs.com/v1/'
      COSMIC_CREDENTIALS = Rails.application.credentials.cosmic

      def initialize
        @slug = COSMIC_CREDENTIALS[:slug]
        @read_key = COSMIC_CREDENTIALS[:read_key]
      end

      def fetch_posts
        fetch_objects('posts')
      end

      private

      def fetch_objects(type)
        resource = "#{@slug}/objects"
        params = {
          props: 'slug,title,type_slug,metadata',
          read_key: @read_key,
          type: type
        }

        response = get(resource, params)
        return [] unless response.success?

        response.parsed_response['objects']
      end

      def get(resource, params)
        make_request('get', resource, query: params)
      end

      def make_request(method, resource, params)
        uri = "#{BASE_URI}#{resource}"
        HTTParty.send(method, uri, params)
      end
    end
  end
end
```

### 6. Add Controller
Run the following command in the terminal to generate a controller with an index method and view for index
```bash
rails g controller posts index
```

Go to `config/routes.rb` and set the newly created index method of `PostsController` as the root path. The code in the `routes.rb` would look like the one given below
```ruby
Rails.application.routes.draw do
  get 'posts/index'
  root to: 'posts#index'
end
```

Update the `app/controllers/posts_controller.rb` with the following code.
```ruby
class PostsController < ApplicationController
  before_action :set_cosmic_objects_wrapper

  def index
    @posts = @cosmic_objects_wrapper.fetch_posts
    puts @posts
  end

  private

  def set_cosmic_objects_wrapper
    @cosmic_objects_wrapper = ApiWrappers::Cosmic::ObjectsWrapper.new
  end
end
```

### 6. Update Views
Render your posts in the `app/views/posts/index.html.erb` with the following code:
```erb
<% @posts.each do |post| %>
  <div key=<%= post['slug']%> style='margin-bottom:20px;'>
    <% if post['metadata'] && post['metadata']['hero'] %>
      <div>
        <img alt='' src='<%= post['metadata']['hero']['imgix_url'] %>?w=800&auto=format' width='400px' />
      </div>
    <% end %>

    <div><%= post['title'] %></div>
  </div>
<% end %>
```

### 7. Start your app
Start your app, and go to http://localhost:3000. Dance 🎉
```
rails s
```

## Java

::: tip COMING SOON!
If you would like to contribute a demo using this development tool [fork the repo and issue a pull request](https://github.com/cosmicjs/docs).
:::

## .Net

::: tip COMING SOON!
If you would like to contribute a demo using this development tool [fork the repo and issue a pull request](https://github.com/cosmicjs/docs).
:::

## Python

::: tip COMING SOON!
If you would like to contribute a demo using this development tool [fork the repo and issue a pull request](https://github.com/cosmicjs/docs).
:::

## Go

::: tip COMING SOON!
If you would like to contribute a demo using this development tool [fork the repo and issue a pull request](https://github.com/cosmicjs/docs).
:::
