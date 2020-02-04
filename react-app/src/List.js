import React from 'react'

const createList = () => Array.from(
  new Array(10), (item, index) => <li>{index}</li>
)

export default () => (
<ul>{createList()}</ul>
)
