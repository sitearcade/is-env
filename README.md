# @sitearcade/is-env

Nifty util that tells you what env you're in.

## Installation

1. `npm i -D @sitearcade/is-env`
2. See usage...

## Usage

```js
import {
  env,
  isDev, isTesting, isStaging, isProd,
  isServer, isClient,
} from '@sitearcade/is-env';
// const {isDev} = require('@sitearcade/is-env');

// Get normalized NODE_ENV
console.log(env) // === 'development'

// Get boolean values
console.log(
  isDev, // === true
  isTesting, // === false
  isStaging, // === false
  isProd, // === false
);

// Infer server/client using typof window
console.log(isServer) // === true
console.log(isClient) // === false
```

That's it!
