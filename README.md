# @fractal-tess/prettier-config

FT's Prettier configuration

[![License](https://badgen.net/github/license/fractal-tess/prettier-config)](https://github.com/Fractal-Tess/prettier-config/blob/main/LICENSE)

## Usage

### Install

```shell
$ npm add -D prettier @fractal-tess/prettier-config
```

### Configure

#### Option 1: Direct Reference (Recommended)

Reference the configuration in your `package.json` file:

```json
{
  "prettier": "@fractal-tess/prettier-config"
}
```

This uses the default export which includes built-in support for Astro and Svelte files with proper parser configuration.

#### Option 2: Extend Configuration

You can also extend the configuration through a [configuration file](https://prettier.io/docs/en/configuration.html) for additional customization:

```js
const config = require("@fractal-tess/prettier-config");

module.exports = {
  ...config,
  // Add your custom overrides here
  printWidth: 120
};
```
