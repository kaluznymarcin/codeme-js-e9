import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <p className="textWrapper" style={{color: this.props.color || 'blue', fontSize: '2em'}}>
        {this.props.children}
      </p>
    )
  }
}

export default Text;
