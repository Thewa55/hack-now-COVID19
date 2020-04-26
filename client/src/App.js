import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Signup from "./pages/Signup"
import LandingPage from "./pages/Landing"
import Login from "./pages/Login"
import Request from "./pages/Request"
import { StoreProvider } from './utils/GlobalState'
import Profile from "./pages/Profile"

function App() {
  return (
    <Router>
        <StoreProvider>
          <Header />
          <Fragment>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/SignUp" component={Signup} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Request" component={Request} />
            <Route exact path="/Profile" component={Profile} />
          </Fragment>
        </StoreProvider>
    </Router>
  );
}

export default App;
