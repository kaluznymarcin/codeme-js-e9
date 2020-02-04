import React, { Component } from 'react';

class Cycle extends Component {
  state = {
    interval: 1
  }

  constructor(props) {
    super(props);
    this.myEl = React.createRef()
  }

  componentDidUpdate(prevProps, prevState) {
    /* console.log('P:: ', prevState.interval);
    console.log('C:: ', this.state); */
  }

  componentDidMount() {
    this.uidInterval = setInterval(
      () => this.setState({
        interval: this.state.interval + 1
      }),
      1000
    );

    const el = this.myEl.current;
    el.style.backgroundColor = 'green';
  }

  componentWillUnmount() {
    clearInterval(this.uidInterval);
  }

  render() {
    return (
    <div ref={this.myEl}>{this.state.interval}</div>
    )
  }
}

export default Cycle;
