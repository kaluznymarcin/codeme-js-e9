import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions'
import Link from './FilterLink'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  filter: ownProps.filter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
