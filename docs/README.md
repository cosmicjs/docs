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
- title: 'Guides'
  url: '/guides/'
  description: "Use our quick start guides to get started using Cosmic with different development tools."
  icon: 'https://cdn.cosmicjs.com/4d1e8850-33e7-11ea-983a-099bce0aacb8-067-book-2.svg'
- title: 'Webhooks'
  url: '/webhooks/'
  description: "Make external requests when events occur in your Bucket."
  icon: 'https://cdn.cosmicjs.com/0d611e50-c832-11ea-b44f-f5c7da208e23-007-anchor.svg'
- title: 'Extensions'
  url: '/extensions/'
  description: "Connect to third-party APIs and create custom views within your Bucket."
  icon: 'https://cdn.cosmicjs.com/6174d730-898e-11ea-9edc-335682595c41-cubes.svg'
- title: 'CLI'
  url: '/cli/'
  description: 'Use the power of Cosmic from the comfort of your command-line tool.'
  icon: 'https://cdn.cosmicjs.com/505c07b0-c832-11ea-b44f-f5c7da208e23-039-web-programming.svg'
- title: 'Functions'
  url: '/functions/'
  description: 'Deploy code without having to manage server infrastructure.'
  icon: '/icons/function.svg'
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