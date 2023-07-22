# Warikan Netflix App

This is warikan-netflix monorepo app.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: [Next.js](https://nextjs.org/) frontend app
- `backend`: API
- `ui`: a stub React component library shared by `web` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Usage

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To setup, run the following command:

```
# Please login in your firebase project
npm run firebase-login -w apps/backend
# Please set your firebase project
npm run firebase-use -w apps/backend -- <your firebase project id>
```

To develop all apps and packages, run the following command:

```
npm run dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
