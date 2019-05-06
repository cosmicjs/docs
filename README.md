# CosmicJS Docs

This is the source code for the CosmicJS documentation site and is built with [VuePress v1+](https://v1.vuepress.vuejs.org/).

## Local Setup

To setup the local environment:

### Prerequisites

- [Node.js v8+](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/) (Optional, but recommended)

### Development

```
$ yarn run dev
```

### Build

```
$ yarn build
```

## Configure Sidebar Icons

In `.vuepress/config.js`, there is a `sidebar` option to configure the various top level sections.

To add icons:

1. Add icon image asset (if font-icons are desired, more work is required) to the `.vuepress/public` directory which exposes the image for reference
1. Open the `.vuepress/config.js` file and locate the `themeConfig.sidebar` array
1. Add the `icon` key and the file path as the value:

```js
module.exports = {
  ...,
  themeConfig: {
    ...,
    sidebar: [
      {
        title: 'Home',
        path: '/',
        // Add icon uploaded to `.vuepress/public/icons/home.svg`
        icon: '/icons/home.svg'
      }
    ]
  }
}
```
