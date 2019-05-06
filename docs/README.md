---
pageClass: docs-home-page
cardData:
- title: 'REST API'
  url: '/docs/rest-api/'
  description: '<p class="home-card-description">Integrate your content using the <a href="https://www.npmjs.com/package/cosmicjs" target="_blank">NPM module</a> or directly to the REST API.</p>'
  icon: '/icons/npm.svg'
- title: 'GraphQL API'
  url: '/docs/graphql-api/'
  description: "<p class='home-card-description'>Use the GraphQL API to get only the data you need and nothing you don't.</p>"
  icon: '/icons/graphql.svg'
- title: 'CLI'
  url: '/docs/cli/'
  description: '<p class="home-card-description">Use the power of Cosmic JS from the comfort of your command-line tool.</p>'
  icon: '/icons/terminal.svg'
- title: 'Functions'
  url: '/docs/functions/'
  description: '<p class="home-card-description">Deploy code without having to manage server infrastructure.'
  icon: '/icons/function.svg'
- title: 'Webhooks'
  url: '/docs/webhooks/'
  description: "<p class='home-card-description'>Use the GraphQL API to get only the data you need and nothing you don't."
  icon: '/icons/webhooks.png'
- title: 'Extensions'
  url: '/docs/extensions/'
  description: "<p class='home-card-description'>Use the GraphQL API to get only the data you need and nothing you don't."
  icon: '/icons/puzzle-piece.svg'
---

# Documentation

Welcome to Cosmic JS! Learn how to use the entire Cosmic JS toolkit with our documentation.

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