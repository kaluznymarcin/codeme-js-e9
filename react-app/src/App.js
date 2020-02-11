import React from 'react'
import './App.css';

import Number from './Number'

function App() {
  const STYLE = {fontWeight: 'bold', fontSize: '40px'}
  return (
    <div className="App">
      <Number value={5} />
    </div>
  );
}

export default App;
