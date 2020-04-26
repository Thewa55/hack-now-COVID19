import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return(
        <div className="Header">
            <h1 className="appName">Covinder!</h1>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/Signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/Login">
              <button>Login</button>
            </Link>
            <Link to="/Profile">
              <button>My Profile</button>
            </Link>
        </div>
    ) 
}

export default Header