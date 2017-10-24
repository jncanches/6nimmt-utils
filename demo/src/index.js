import React, {Component} from 'react'
import {render} from 'react-dom'

import Utils from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>6nimmt-utils Demo</h1>
      Weight of a 25 face value card : {Utils.getWeightFromFaceValue(25)}
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
