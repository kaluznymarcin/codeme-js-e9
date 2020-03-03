import React, { Component } from 'react'

export default WrappedComponent => class extends Component {
  componentDidMount() {
    !this.props.shouldNotFetch && this.props.fetchData()
  }

  componentDidUpdate({ refetchKey }) {
    const shouldRefetch = !this.props.shouldNotFetch && (this.props.refetchKey && refetchKey !== this.props.refetchKey)

    if (shouldRefetch) {
      this.props.fetchData()
    }
  }

  render() {
    const { data, fetchData, shouldNotFetch, ...props } = this.props;
    return <WrappedComponent {...props} />
  }
}
