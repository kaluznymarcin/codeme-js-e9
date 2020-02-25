import React from 'react';

import { connect } from 'react-redux';

import  setOpenModal from '../actions/setOpenModal';

class Text extends React.Component {
  onClickOpenModal = () => {
    this.props.dispatch(setOpenModal(true));
  }

  render() {
    return (
      <p onClick={this.onClickOpenModal} className="textWrapper" style={{color: this.props.color || 'blue', fontSize: '2em'}}>
        {this.props.children}
      </p>
    )
  }
}

export default connect()(Text);
