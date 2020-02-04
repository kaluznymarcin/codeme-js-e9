import React, { Component } from 'react'

class Number extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
      backgroundColor: '#fff'
    }
  }

  handler = () => {
    this.setState({
      value: this.state.value + 1,
      backgroundColor: '#c00'
    })
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <div>
        <div style={{backgroundColor}}>{this.state.value}</div>
        <button onClick={this.handler}>up</button>
        <button onClick={() => this.setState({value: this.state.value - 1})}>down</button>
      </div>
    )
  }
}

export default Number
