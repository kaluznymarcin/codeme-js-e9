export default (state = null, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENCY_TODAY_DATA':
      return payload;
    default:
      return state;
  }
};
