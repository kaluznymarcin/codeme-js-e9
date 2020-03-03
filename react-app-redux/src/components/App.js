import React from 'react';
import './App.css';

import Header from './Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers'

import Footer from './Footer';
import TodoList from './TodoList'
import AddTodo from './AddTodo';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
        <Header>Warsztat - ToDo list</Header>
        <Router>
        <div>
          <AddTodo />
          <Switch>
          <Route path="/:slug">
            <TodoList />
          </Route>
          </Switch>
          <Footer />
        </div>
        </Router>
    </Provider>
  );
}

export default App;
