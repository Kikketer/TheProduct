import React, { Component } from 'react';
import {vanilla, getPrint} from 'the-dep'

class App extends Component {
  constructor () {
    super()
    this.state = {Print: null}

    vanilla()
  }

  loadPrint() {
    getPrint().then(p => {
      console.log('Got Print, setting state: ', p.default)
      this.setState({Print: p.default})
    }).catch(err => {
      console.log('Error loading the print module: ', err)
    })
    // getPrint().then(p => {
    //   console.log(p)
    //   // Other wild stuff could happen here like modify state and have the render process
    //   // show the resulting print element
    //   this.setState({Print: p})
    // })
  }

  render() {
    const { Print } = this.state
    return (
      <div>
        <button onClick={this.loadPrint.bind(this)}>Load Print</button>
        <p>Test</p>
        {Print && <Print />}
      </div>
    );
  }
}

export default App;
