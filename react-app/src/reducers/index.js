import { combineReducers } from 'redux';
import openModal from './openModal';
import currencyTodayData from './currencyTodayData';


export default combineReducers({
  openModal,
  currencyTodayData,
});
