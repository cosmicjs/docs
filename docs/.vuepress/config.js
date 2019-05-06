module.exports = {
  siteTitle: 'Cosmic JS',
  base: '/docs/',
  themeConfig: {
    logo: '/cosmicjs-logo.png',
    repo: 'cosmicjs/docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'REST API',
        icon: '/icons/npm.svg',
        path: '/rest-api/',
        children: [
          ['/rest-api/', 'Introduction'],
          '/rest-api/errors',
          '/rest-api/authentication',
          '/rest-api/buckets',
          '/rest-api/users',
          '/rest-api/object-types',
          '/rest-api/objects',
          '/rest-api/metafields',
          '/rest-api/media',
          '/rest-api/webhooks',
          '/rest-api/extensions'
        ]
      },
      {
        title: 'GraphQL API',
        path: '/graphql-api/',
        icon: '/icons/graphql.svg'
      },
      {
        title: 'CLI',
        path: '/cli/',
        icon: '/icons/terminal.svg'
      },
      {
        title: 'Functions',
        path: '/functions/',
        icon: '/icons/function.svg'
      },
      {
        title: 'Webhooks',
        path: '/webhooks/',
        icon: '/icons/webhooks.png'
      },
      {
        title: 'Extensions',
        path: '/extensions/',
        icon: '/icons/puzzle-piece.svg'
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