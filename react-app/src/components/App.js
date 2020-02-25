import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Header from './Header';
import Nav from './Nav';
import HomePage from './HomePage';
import Currency from './Currency';
import CurrencyToday from './CurrencyToday';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header>Moja Aplikacja</Header>
        <Nav />

        <Switch>
          <Route path="/waluta/:code">
            <CurrencyToday />
          </Route>
          <Route path="/waluty">
            <Currency />
          </Route>
          {/* <Route path="/" component={HomePage} /> */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
