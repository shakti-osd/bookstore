import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Landing from './components/pages/Landing'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Faq from './components/pages/Faq'
import Team from './components/pages/Team'
import NotFound from './components/not-found/NotFound'

import CreateAccount from './components/pages/Create-Account'
import Shop from './components/shop/Shop'
import Cart from './components/shop/Cart'
import Checkout from './components/shop/Checkout'
import SingleProduct from './components/shop/Single-Product'

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrapper" id="wrapper">
            
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/team" component={Team} />

              <Route exact path="/create-account" component={CreateAccount} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/single-product/:id" component={SingleProduct} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route component={NotFound} />
            </Switch>
            
          
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
