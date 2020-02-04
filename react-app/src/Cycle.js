import React, { Component } from 'react';

class Cycle extends Component {
  state = {
    interval: 1
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('P:: ', prevState.interval);
    console.log('C:: ', this.state);
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
    <div>{this.state.interval}</div>
    )
  }
}

export default Cycle;
