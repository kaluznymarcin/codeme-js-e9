import React, { Component } from 'react'

class Number extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  render() {
    //this.state
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={() => this.setState({value: this.state.value + 1})}>up</button>
        <button onClick={() => this.setState({value: this.state.value - 1})}>down</button>
      </div>
    )
  }
}

export default Number
