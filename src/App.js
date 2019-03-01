import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

// import component / pages
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/detail/:id" component={DetailPage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
