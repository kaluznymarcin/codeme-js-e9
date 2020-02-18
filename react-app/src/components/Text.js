import React from 'react';

const LIMIT = 30;

class Text extends React.Component {

  render() {

    return (
      <p className="textWrapper">
        {this.props.content || this.props.children}
      </p>
    )
  }
}

export default Text;
