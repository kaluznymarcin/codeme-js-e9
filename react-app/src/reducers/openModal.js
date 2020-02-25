export default (state = false, action) => {
  switch (action.type) {
  case 'SET_OPEN_MODAL':
    return !state//action.payload;
  default:
    return state;
  }
};
