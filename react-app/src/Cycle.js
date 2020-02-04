import React, { Component } from 'react';

class Cycle extends Component {
  state = {
    interval: 1
  }

  componentDidMount() {
    this.uidInterval = setInterval(
      () => this.setState({
        interval: this.state.interval + 1
      }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.uidInterval);
  }

  render() {
    return (
    <div>{this.state.Interval}</div>
    )
  }
}

export default Cycle;
