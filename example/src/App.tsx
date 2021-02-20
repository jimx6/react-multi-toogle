import React from 'react'
import { ReactMultiToogle } from 'react-multi-toogle'
import {
  faSun,
  faMoon,
  faAd,
  faAnchor
} from '@fortawesome/free-solid-svg-icons'
import 'react-multi-toogle/dist/index.css'

const App = () => {
  return <div style={{margin: '20px'}}><ReactMultiToogle
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
    ]}/></div>
}

export default App
