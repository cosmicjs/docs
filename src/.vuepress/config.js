module.exports = {
  siteTitle: 'Cosmic JS',
  themeConfig: {
    logo: '/cosmicjs.svg',
    repo: 'cosmicjs/docs',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'REST API',
        path: '/rest-api/',
        depth: 2,
        type: 'group'
      },
      {
        title: 'GraphQL API',
        path: '/graphql-api/',
        depth: 2
      },
      {
        title: 'CLI',
        path: '/cli/',
        depth: 2
      },
      {
        title: 'Functions',
        path: '/functions/',
        depth: 2
      },
      {
        title: 'Webhooks',
        path: '/webhooks/',
        depth: 2
      },
      {
        title: 'Extensions',
        path: '/extensions/',
        depth: 2
      }
    ]
  },
  head: [
    ['link', {
      href: "//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600",
      rel: "stylesheet",
      type: "text/css"
    }]
  ],
  plugins: ['tabs']
}