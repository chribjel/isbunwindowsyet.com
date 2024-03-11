# Decidable Next.js starter

This is a starter for [Next.js](https://nextjs.org/) projects.

## Get started

```bash
# Clone the repository
git clone git@github.com:Decidable-AS/nextjs-starter.git

# OR create a new project based on this starter

# Install dependencies
bun install

# Start the development server
bun dev
```

## Using environment variables

Environment variables are imported from `@/env.mjs` and can be used in your code like this:

```js
import { env } from '@/env.mjs'

console.log(env.MY_ENV_VAR)
```

This file validates that all required environment variables are set and throws an error if not.

## Features

* [Bun](https://bun.sh)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [shadcn-ui](https://ui.shadcn.com)
