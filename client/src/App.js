import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Signup from "./pages/Signup"
import LandingPage from "./pages/Landing"
import Login from "./pages/LogIn"

function App() {
  return (
    <Router>
      <Header />
      <Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/SignUp" component={Signup} />
        <Route exact path="/Login" component={Login} />
      </Fragment>
    </Router>
  );
}

export default App;
