import React from 'react';
import './App.css';

import Header from './Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers'

const store = createStore(
  reducers
);

function App() {
  return (
    <Provider store={store}>
        <Header>Warsztat - ToDo list</Header>
    </Provider>
  );
}

export default App;
