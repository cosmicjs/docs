## DEPRECATED
This the the repo for the OLD docs (v1). Go to the repo for the latest docs [here](https://github.com/cosmicjs/cosmic-docs).

<p align="center">
  <a href="https://www.cosmicjs.com"><img src="https://cdn.cosmicjs.com/3cf62ab0-8e13-11ea-9b8f-cd0254a8c979-cosmic-dark.svg" alt="Cosmic" width="400"></a>
</p>
<p align="center">
  📖 <a href="https://docs.cosmicjs.com">View Docs</a>
</p>

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
