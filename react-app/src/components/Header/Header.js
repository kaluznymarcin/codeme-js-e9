import React from 'react';

import Title from './Title';

import { useSelector } from 'react-redux';

export default (props) => {
  const openModal = useSelector(state => state.openModal);
  console.log(openModal);
  return (
    <header className="pageHeader">
      <Title>{props.children}</Title>
      {openModal && alert('Modal')}
    </header>
  );
}
