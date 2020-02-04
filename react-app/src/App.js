import './App.css';
import logo from './logo.svg';
import React from 'react';
import Title from './Title'
import List from './List'
import Number from './Number'

import Interval from './Cycle'

function App() {
  const STYLE = {fontWeight: 'bold', fontSize: '40px'}
  return (
    <div className="App">
      <Number value={5} />  {/* new Number({value: 5}) */}

      <Interval />
      {/* <Title>
        <span style={{color: "red"}}>Moja Pierwsza</span>
      </Title>
      <Title titleText="Aplikacja" />
      <List /> */}
    </div>
  );
}

export default App;
