import { compose } from 'redux';
import { connect } from 'react-redux';

import  setOpenModal from '../actions/setOpenModal';

import Text from './Text';

const mapStateToProps = (state) => ({
  open: state.openModal
});

/* const mapDispatchToProps = {
  setOpen: setOpenModal
}; */

/* const mapDispatchToProps = (dispatch) => ({
  setOpen: (open) => dispatch(setOpenModal(open))
}); */

const mapDispatchToProps = (dispatch) => ({
  setOpen: compose(dispatch, setOpenModal)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);
