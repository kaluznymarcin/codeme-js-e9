import React from 'react';

class Text extends React.Component {
  onClickOpenModal = () => {
    this.props.setOpen(true);
  }

  render() {
    console.log(this.props.open);
    return (
      <p onClick={this.onClickOpenModal} className="textWrapper" style={{color: this.props.color || 'blue', fontSize: '2em'}}>
        {this.props.children}
      </p>
    )
  }
}

export default Text;
