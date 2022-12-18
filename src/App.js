import React from 'react';
import history from './router/history';
import Navigation from './router/Navigation';
import { Router } from 'react-router-dom';



class App extends React.Component {
  render() {
      return (
              // <Router history={history}>
                  <Navigation />
              // </Router>
      );
  }
}

export default App;
