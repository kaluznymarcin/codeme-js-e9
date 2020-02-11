import React, { useState } from 'react'

function Number({ value: propsValue }) {
  /* const valueState = useState(propsValue);
  const value = valueState[0];
  const setState = valueState[1]; */
  const [value, setValue] = useState(propsValue);
  return <div>
        <div>{value}</div>
        <button onClick={() => setValue(value + 1)}>up</button>
        <button onClick={() => setValue(value - 1)}>down</button>
      </div>;
}

export default Number
