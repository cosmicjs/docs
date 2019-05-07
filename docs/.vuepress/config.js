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
    sidebar: {
      '/rest-api/': [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'REST API',
          icon: '/docs/icons/npm.svg',
          path: '/rest-api/',
          collapsable: false,
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
          icon: '/docs/icons/graphql.svg'
        },
        {
          title: 'CLI',
          path: '/cli/',
          icon: '/docs/icons/terminal.svg'
        },
        {
          title: 'Functions',
          path: '/functions/',
          icon: '/docs/icons/function.svg'
        },
        {
          title: 'Webhooks',
          path: '/webhooks/',
          icon: '/docs/icons/webhooks.png'
        },
        {
          title: 'Extensions',
          path: '/extensions/',
          icon: '/docs/icons/puzzle-piece.svg'
        }
      ],
      '/': [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'REST API',
          icon: '/docs/icons/npm.svg',
          path: '/rest-api/',
        },
        {
          title: 'GraphQL API',
          path: '/graphql-api/',
          icon: '/docs/icons/graphql.svg'
        },
        {
          title: 'CLI',
          path: '/cli/',
          icon: '/docs/icons/terminal.svg'
        },
        {
          title: 'Functions',
          path: '/functions/',
          icon: '/docs/icons/function.svg'
        },
        {
          title: 'Webhooks',
          path: '/webhooks/',
          icon: '/docs/icons/webhooks.png'
        },
        {
          title: 'Extensions',
          path: '/extensions/',
          icon: '/docs/icons/puzzle-piece.svg'
        }
      ]
    }
  },
  head: [
    ['link', 
      {
        href: "//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600",
        rel: "stylesheet",
        type: "text/css"
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'https://cosmicjs.com/images/favicons/apple-touch-icon-57x57.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://cosmicjs.com/images/favicons/apple-touch-icon-57x57.png'
      }
    ]
  ],
  plugins: ['tabs']
}