---
pageClass: docs-home-page
cardData:
- title: 'REST API'
  url: '/docs/rest-api/'
  description: '<p class="home-card-description">Integrate your content using the <a href="https://www.npmjs.com/package/cosmicjs" target="_blank">NPM module</a> or directly to the REST API.</p>'
  icon: '/docs/icons/npm.svg'
- title: 'GraphQL API'
  url: '/docs/graphql-api/'
  description: "<p class='home-card-description'>Use the GraphQL API to get only the data you need and nothing you don't.</p>"
  icon: '/docs/icons/graphql.svg'
- title: 'CLI'
  url: '/docs/cli/'
  description: '<p class="home-card-description">Use the power of Cosmic JS from the comfort of your command-line tool.</p>'
  icon: '/docs/icons/terminal.svg'
- title: 'Functions'
  url: '/docs/functions/'
  description: '<p class="home-card-description">Deploy code without having to manage server infrastructure.'
  icon: '/docs/icons/function.svg'
- title: 'Webhooks'
  url: '/docs/webhooks/'
  description: "<p class='home-card-description'>Use the GraphQL API to get only the data you need and nothing you don't."
  icon: '/docs/icons/webhooks.png'
- title: 'Extensions'
  url: '/docs/extensions/'
  description: "<p class='home-card-description'>Connect to third-party APIs and create custom views within your Bucket."
  icon: '/docs/icons/puzzle-piece.svg'
---

# Documentation

Welcome to Cosmic JS! Learn how to use the entire Cosmic JS toolkit and explore features.

<div class="home-card-list">
  <HomeCard
    v-for="card in $frontmatter.cardData"
    :title="card.title"
    :url="card.url"
    :icon="card.icon"
    :key="card.title"
  >
    <div v-html="card.description"></div>
  </HomeCard>
</div>