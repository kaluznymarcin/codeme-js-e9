import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const FilterLink =  ({ active, filter, children, onClick }) => (
  <Link to={`/${filter}`}>
    <button
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  </Link>
)
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
export default FilterLink
