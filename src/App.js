import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import './App.css';

import Home from './containers/home';
import Rate from './containers/rate';
import Tip from './containers/tip';
import Card from './containers/card';
import Paypal from './containers/paypal';
import Photos from './containers/photos';
import PhotoDetail from './containers/photoDetail';

class App extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rate' component={Rate} />
            <Route exact path='/tip' component={Tip} />
            <Route exact path='/card' component={Card} />
            <Route exact path='/paypal' component={Paypal} />
            <Route exact path='/photos' component={Photos} />
            <Route exact path='/photo-detail' component={PhotoDetail} />
            <Redirect to='/' />
          </Switch>
        </Router>
      );
    }
}

export default App;