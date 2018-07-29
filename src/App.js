import React, { Component } from 'react';
import { Provider } from 'react-redux';

import SearchWidget from './components/SearchWidget';
import store from './config/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchWidget />
        </div>
      </Provider>
    );
  }
}

export default App;
