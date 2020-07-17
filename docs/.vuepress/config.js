module.exports = {
  siteTitle: 'Cosmic',
  base: '/',
  themeConfig: {
    logo: 'https://cdn.cosmicjs.com/3cf62ab0-8e13-11ea-9b8f-cd0254a8c979-cosmic-dark.svg',
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
          icon: '/icons/npm.svg',
          path: '/rest-api/'
        },
        {
          title: 'GraphQL API',
          icon: '/icons/graphql.svg',
          path: '/graphql-api/',
          collapsable: false,
          children: [
            ['/graphql-api/', 'Introduction'],
            '/graphql-api/request-limits',
            '/graphql-api/methods-overview',
            '/graphql-api/queries',
            '/graphql-api/mutations',
            '/graphql-api/examples',
            '/graphql-api/previous-versions'
          ]
        },
        {
          title: 'Guides',
          path: '/guides/',
          icon: 'https://cdn.cosmicjs.com/4d1e8850-33e7-11ea-983a-099bce0aacb8-067-book-2.svg'
        },
        {
          title: 'Webhooks',
          path: '/webhooks/',
          icon: 'https://cdn.cosmicjs.com/0d611e50-c832-11ea-b44f-f5c7da208e23-007-anchor.svg'
        },
        {
          title: 'Extensions',
          path: '/extensions/',
          icon: 'https://cdn.cosmicjs.com/6174d730-898e-11ea-9edc-335682595c41-cubes.svg'
        },
        {
          title: 'CLI',
          path: '/cli/',
          icon: 'https://cdn.cosmicjs.com/505c07b0-c832-11ea-b44f-f5c7da208e23-039-web-programming.svg'
        },
        {
          title: 'Functions',
          path: '/functions/',
          icon: '/icons/function.svg'
        }
      ],
      '/rest-api/': [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'REST API',
          icon: '/icons/npm.svg',
          path: '/rest-api/',
          collapsable: false,
          children: [
            ['/rest-api/', 'Introduction'],
            '/rest-api/errors',
            '/rest-api/request-limits',
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
          icon: '/icons/graphql.svg',
          path: '/graphql-api/'
        },
        {
          title: 'Guides',
          path: '/guides/',
          icon: 'https://cdn.cosmicjs.com/4d1e8850-33e7-11ea-983a-099bce0aacb8-067-book-2.svg'
        },
        {
          title: 'Webhooks',
          path: '/webhooks/',
          icon: 'https://cdn.cosmicjs.com/0d611e50-c832-11ea-b44f-f5c7da208e23-007-anchor.svg'
        },
        {
          title: 'Extensions',
          path: '/extensions/',
          icon: 'https://cdn.cosmicjs.com/6174d730-898e-11ea-9edc-335682595c41-cubes.svg'
        },
        {
          title: 'CLI',
          path: '/cli/',
          icon: 'https://cdn.cosmicjs.com/505c07b0-c832-11ea-b44f-f5c7da208e23-039-web-programming.svg'
        },
        {
          title: 'Functions',
          path: '/functions/',
          icon: '/icons/function.svg'
        }
      ],
      '/': [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'REST API',
          icon: '/icons/npm.svg',
          path: '/rest-api/',
        },
        {
          title: 'GraphQL API',
          path: '/graphql-api/',
          icon: '/icons/graphql.svg'
        },
        {
          title: 'Guides',
          path: '/guides/',
          icon: 'https://cdn.cosmicjs.com/4d1e8850-33e7-11ea-983a-099bce0aacb8-067-book-2.svg'
        },
        {
          title: 'Webhooks',
          path: '/webhooks/',
          icon: 'https://cdn.cosmicjs.com/0d611e50-c832-11ea-b44f-f5c7da208e23-007-anchor.svg'
        },
        {
          title: 'Extensions',
          path: '/extensions/',
          icon: 'https://cdn.cosmicjs.com/6174d730-898e-11ea-9edc-335682595c41-cubes.svg'
        },
        {
          title: 'CLI',
          path: '/cli/',
          icon: 'https://cdn.cosmicjs.com/505c07b0-c832-11ea-b44f-f5c7da208e23-039-web-programming.svg'
        },
        {
          title: 'Functions',
          path: '/functions/',
          icon: '/icons/function.svg'
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
        'ga': 'UA-47527341-3'
      }
    ],
    [require('vuepress-intercom'), { appId: 'o4fm83zs' }]
  ]  
}