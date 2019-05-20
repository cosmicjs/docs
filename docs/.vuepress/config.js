module.exports = {
  siteTitle: 'Cosmic JS',
  base: '/docs/',
  themeConfig: {
    logo: 'https://web-assets.cosmicjs.com/images/cosmicjs-logo.svg',
    repo: 'cosmicjs/docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',
    algolia: {
      apiKey: '2cdadd5ab16751ea3a49a13854e5b052',
      indexName: 'cosmicjs'
    },
    sidebar: {
      '/graphql-api/': [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'REST API',
          icon: '/docs/icons/npm.svg',
          path: '/rest-api/'
        },
        {
          title: 'GraphQL API',
          icon: '/docs/icons/graphql.svg',
          path: '/graphql-api/',
          collapsable: false,
          children: [
            ['/graphql-api/', 'Introduction'],
            '/graphql-api/methods-overview',
            '/graphql-api/queries',
            '/graphql-api/mutations',
            '/graphql-api/examples'
          ]
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
          icon: '/docs/icons/graphql.svg',
          path: '/graphql-api/'
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
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600",
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
  plugins: [
    'tabs',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-42312323527341-3'
      }
    ]
  ]  
}