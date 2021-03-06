import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = {Print: null}
  }

  componentDidMount() {
    setTimeout(() => {
      import(/*webpackPrefetch: true*/ 'the-dep/Print').then(
        Print => {
          console.log('Got the print library!')
          this.setState({
            Print: Print.default
          })
        }
      )
    }, 1000)
  }

  // loadPrint() {
  //   // This is if the library has the "import" statement (not in this example)
  //   getPrint().then(p => {
  //     console.log('Got Print, setting state: ', p.default)
  //     this.setState({Print: p.default})
  //   }).catch(err => {
  //     console.log('Error loading the print module: ', err)
  //   })
  // }

  render() {
    const { Print } = this.state
    return (
      <div>
        <p>You should see the Print component below:</p>
        {Print && <Print/>}
      </div>
    );
  }
}

export default App;
