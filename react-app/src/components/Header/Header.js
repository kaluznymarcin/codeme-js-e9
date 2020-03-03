import React from 'react';

import Title from './Title';

import { useSelector } from 'react-redux';
import currencyTodayData from '../../reducers/currencyTodayData';

export default (props) => {
  /* const openModal = useSelector(state => state.openModal);
  const currency = useSelector(state => state.currencyTodayData.currency); */
  const { openModal, currency } = useSelector(state => ({
    openModal: state.openModal,
    currency: state.currencyTodayData && state.currencyTodayData.currency
  }))
  console.log(openModal);
  return (
    <header className="pageHeader">
      <Title>{props.children} {currency}</Title>
      {openModal && alert('Modal')}
    </header>
  );
}
