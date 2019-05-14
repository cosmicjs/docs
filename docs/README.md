---
pageClass: docs-home-page
cardData:
- title: 'REST API'
  url: '/rest-api/'
  description: 'Integrate your content using the Cosmic JS NPM module or directly to the REST API.'
  icon: '/docs/icons/npm.svg'
- title: 'GraphQL API'
  url: '/graphql-api/'
  description: "Use the GraphQL API to get only the data you need and nothing you don't."
  icon: '/docs/icons/graphql.svg'
- title: 'CLI'
  url: '/cli/'
  description: 'Use the power of Cosmic JS from the comfort of your command-line tool.'
  icon: '/docs/icons/terminal.svg'
- title: 'Functions'
  url: '/functions/'
  description: 'Deploy code without having to manage server infrastructure.'
  icon: '/docs/icons/function.svg'
- title: 'Webhooks'
  url: '/webhooks/'
  description: "Make external requests when events occur in your Bucket."
  icon: '/docs/icons/webhooks.png'
- title: 'Extensions'
  url: '/extensions/'
  description: "Connect to third-party APIs and create custom views within your Bucket."
  icon: '/docs/icons/puzzle-piece.svg'
---

# Documentation

Welcome to Cosmic JS! Learn how to use the entire Cosmic JS toolkit and explore features.

<div class="home-card-list">
  <HomeCard
    v-for="card in $frontmatter.cardData"
    :title="card.title"
    :description="card.description"
    :url="card.url"
    :icon="card.icon"
    :key="card.title"
  >
  </HomeCard>
</div>