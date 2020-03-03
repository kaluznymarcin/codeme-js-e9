import React from 'react';
import './App.css';

import Header from './Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers'

import Footer from './Footer';
import TodoList from './TodoList'
import AddTodo from './AddTodo';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
        <Header>Warsztat - ToDo list</Header>
        <div>
          <AddTodo />
          <TodoList />
          <Footer />
        </div>
    </Provider>
  );
}

export default App;
