module.exports = {
  siteTitle: 'Cosmic JS',
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
        path: '/graphql-api/'
      },
      {
        title: 'CLI',
        path: '/cli/'
      },
      {
        title: 'Functions',
        path: '/functions/'
      },
      {
        title: 'Webhooks',
        path: '/webhooks/'
      },
      {
        title: 'Extensions',
        path: '/extensions/'
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