---
sidebarDepth: 0
cardData:
- title: 'REST API'
  url: '/docs/rest-api/'
  description: '<p>Integrate your content using the <a href="https://www.npmjs.com/package/cosmicjs" target="_blank">NPM module</a> or directly to the REST API.</p>'
- title: 'GraphQL API'
  url: '/docs/graphql-api/'
  description: "<p>Use the GraphQL API to get only the data you need and nothing you don't.</p>"
- title: 'CLI'
  url: '/docs/cli/'
  description: '<p>Use the power of Cosmic JS from the comfort of your command-line tool.</p>'
- title: 'Functions'
  url: '/docs/functions/'
  description: '<p>Deploy code without having to manage server infrastructure.'
- title: 'Webhooks'
  url: '/docs/webhooks/'
  description: "<p>Use the GraphQL API to get only the data you need and nothing you don't."
- title: 'Extensions'
  url: '/docs/extensions/'
  description: "<p>Use the GraphQL API to get only the data you need and nothing you don't."
---

# Documentation

Welcome to Cosmic JS! Learn how to use the entire Cosmic JS toolkit with our documentation.

<HomeCard
  v-for="card in $frontmatter.cardData"
  :title="card.title"
  :url="card.url"
  :key="card.title"
>
  <div v-html="card.description"></div>
</HomeCard>
