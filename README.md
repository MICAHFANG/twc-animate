# @micahfang/twc-animate

<center>

![GitHub repo size](https://img.shields.io/github/repo-size/MICAHFANG/twc-animate?style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@micahfang/twc-animate?color=%236cb7ca&style=flat-square)
![npm](https://img.shields.io/npm/dm/@micahfang/twc-animate?color=%23604d9e&style=flat-square)

![NPM](https://img.shields.io/npm/l/@micahfang/twc-animate?style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/MICAHFANG/twc-animate?color=%2315293d&style=flat-square)

</center>

A TailwindCSS plugin provides a variety of commonly used animation effects.

[Examples](https://micahfang.github.io/twc-animate/)

## Table of Contents

- [@micahfang/twc-animate](#micahfangtwc-animate)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [Animate duration times](#animate-duration-times)
    - [Animate repeat count](#animate-repeat-count)
    - [Shake animation](#shake-animation)
    - [Animate duration times](#animate-duration-times-1)
    - [Animate repeat count](#animate-repeat-count-1)
    - [Shake animation](#shake-animation-1)
  - [License](#license)
  - [License](#license-1)

## Install

Before you use `@micahfang/twc-animate` you should check your
[tailwindcss](https://tailwindcss.com/docs) version is larger than 3.0.

```sh
pnpm add @micahfang/twc-animate -D
# or use yarn
yarn add @micahfang/twc-animate -D
# or use npm
npm install @micahfang/twc-animate -D
```

## Usage

Update your `tailwind.config.js`

```js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@micahfang/twc-animate')], // require the plugin,
}
```

See more [examples](https://micahfang.github.io/twc-animate/).

### Animate duration times

`ani-duration-[times]`

**example**

```jsx
const AniCount = () => (
  <>
    <div className="ani-shake ani-duration-200"></div>
    <div className="ani-shake ani-duration-300"></div>
    <div className="ani-shake ani-duration-[100ms]"></div>
    <div className="ani-shake ani-duration-1000"></div>
  </>
)
```

### Animate repeat count

`ani-count-[count]`

**example**

```jsx
const AniCount = () => (
  <>
    <div className="ani-shake ani-count-1"></div>
    <div className="ani-shake ani-count-2"></div>
    <div className="ani-shake ani-count-[100]"></div>
    <div className="ani-shake ani-count-infinite"></div>
  </>
)
```

### Shake animation

If you want to shake an element, you can yse add `ani-shake` class to your
element.

**example**

```jsx
const ShakeEle = () => <div className="ani-shake ani-count-2"></div>
```

The `ani-shake` class will add an animation to the div. Because of `ani-count-2`
class This animation will repeat twice.

**Different types of shake**

- `ani-shake`: rotate animate
- `ani-shake-horizontal`: translate x
- `ani-shake-vertical`: translate y

See more [examples]('https://micahfang.github.io/twc-animate/').

### Animate duration times

`ani-duration-[times]`

**example**

```jsx
const AniCount = () => (
  <>
    <div className="ani-shake ani-duration-200"></div>
    <div className="ani-shake ani-duration-300"></div>
    <div className="ani-shake ani-duration-[100ms]"></div>
    <div className="ani-shake ani-duration-1000"></div>
  </>
)
```

### Animate repeat count

`ani-count-[count]`

**example**

```jsx
const AniCount = () => (
  <>
    <div className="ani-shake ani-count-1"></div>
    <div className="ani-shake ani-count-2"></div>
    <div className="ani-shake ani-count-[100]"></div>
    <div className="ani-shake ani-count-infinite"></div>
  </>
)
```

### Shake animation

If you want to shake an element, you can yse add `ani-shake` class to your
element.

**example**

```jsx
const ShakeEle = () => <div className="ani-shake ani-count-2"></div>
```

The `ani-shake` class will add an animation to the div. Because of `ani-count-2`
class This animation will repeat twice.

**Different types of shake**

- `ani-shake`: rotate animate
- `ani-shake-horizontal`: translate x
- `ani-shake-vertical`: translate y

See more [examples](https://micahfang.github.io/twc-animate/).

## License

[MIT © Micah Fang.](../LICENSE)

## License

[MIT © Micah Fang.](../LICENSE)
