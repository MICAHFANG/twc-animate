# @micah/twc-animate

[![license](https://img.shields.io/github/license/MICAHFANG/twc-animate.svg)](LICENSE)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

A TailwindCSS plugin provides a variety of commonly used animation effects.

## Table of Contents

- [@micah/twc-animate](#micahtwc-animate)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
    - [Any optional sections](#any-optional-sections)
  - [Usage](#usage)
  - [License](#license)

## Install

Before you use `@micah/twc-animate` you should check your
[tailwindcss](https://tailwindcss.com/docs) version is larger than 3.0.

```sh
pnpm add @micahfang/twc-animate -D
# or use yarn
yarn add @micahfang/twc-animate -D
# or use npm
npm install @micahfang/twc-animate -D
```

### Any optional sections

## Usage

Update your `tailwind.config.js`

```js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@micahfang/twc-animate')], // require the plugin,
}
```

## License

[MIT © Micah Fang.](../LICENSE)
