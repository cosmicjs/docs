# Cosmic JS Docs

<p align="left">
  📖 <a href="https://cosmicjs.com/docs">View Docs</a>
</p>

This is the source code for the Cosmic JS documentation site and is built with [VuePress v1+](https://v1.vuepress.vuejs.org/).

## Local Setup

To setup the local environment:

### Prerequisites

- [Node.js v8+](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/) (Optional, but recommended)

### Development

This will create a local web server at `http://localhost:8080/` if nothing is running on that port. It has hot module reloading and will detect most changes you make.*

```
$ yarn run dev
```

\* Note: It is not always reliable when making low level configurations or changing the underlying architecture of VuePress, but this should not impact most users who are focused on content and UI level changes.

### Build

This will compile the package you want for deploying to production. It will create a folder in `docs/.vuepress/dist`.

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
