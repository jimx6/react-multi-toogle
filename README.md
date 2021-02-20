# react-multi-toogle

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-multi-toogle.svg)](https://www.npmjs.com/package/react-multi-toogle) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-multi-toogle
```
or
```bash
yarn add react-multi-toogle
```

## Usage

```tsx
import React from 'react'
import { ReactMultiToogle } from 'react-multi-toogle'
import {
  faSun,
  faMoon,
  faAd,
  faAnchor
} from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return <ReactMultiToogle
    name="testToogle"
    onClick={(state) => {
      console.log(state)
    }}
    options={[
      {
        icon: faSun,
        value: "state1"
      },
      {
        value: "state2",
        icon: faMoon,
      },
      {
        icon: faAd,
        value: "state3"
      },
      {
        icon: faAnchor,
        value: "state4"
      },
    ]}/>
}

export default App

```

## License

MIT © [jimx6](https://github.com/jimx6)
