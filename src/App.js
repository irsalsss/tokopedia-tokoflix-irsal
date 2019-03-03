import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// import component / pages
import store from './store/store';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id/:title" component={DetailPage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
