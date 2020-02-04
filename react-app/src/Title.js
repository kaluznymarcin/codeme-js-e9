import React from 'react'

class Title extends React.Component {
  render() {
    const { children, titleText = '' } = this.props
    return (
      <h1>{titleText.toUpperCase() || children}</h1>
    )
  }
}

export default Title

/* ({ children, titleText = '' }) => {
  return (
    <h1>{titleText.toUpperCase() || children}</h1>
  )
} */
