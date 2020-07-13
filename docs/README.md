---
pageClass: docs-home-page
cardData:
- title: 'REST API'
  url: '/rest-api/'
  description: 'Integrate your content using the Cosmic NPM module or directly to the REST API.'
  icon: '/icons/npm.svg'
- title: 'GraphQL API'
  url: '/graphql-api/'
  description: "Use the GraphQL API to get only the data you need and nothing you don't."
  icon: '/icons/graphql.svg'
- title: 'CLI'
  url: '/cli/'
  description: 'Use the power of Cosmic from the comfort of your command-line tool.'
  icon: '/icons/terminal.svg'
- title: 'Functions'
  url: '/functions/'
  description: 'Deploy code without having to manage server infrastructure.'
  icon: '/icons/function.svg'
- title: 'Webhooks'
  url: '/webhooks/'
  description: "Make external requests when events occur in your Bucket."
  icon: 'https://web-assets.cosmicjs.com/images/docs/webhooks.png'
- title: 'Extensions'
  url: '/extensions/'
  description: "Connect to third-party APIs and create custom views within your Bucket."
  icon: '/icons/puzzle-piece.svg'
- title: 'Guides'
  url: '/guides/'
  description: "Use our quick start guides to learn how to get started with Cosmic using React, Node.js, Angular, Vue, and more."
  icon: 'https://cdn.cosmicjs.com/4d1e8850-33e7-11ea-983a-099bce0aacb8-067-book-2.svg'
---

# Documentation

Welcome to Cosmic! Learn how to use the entire Cosmic toolkit and explore features.

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