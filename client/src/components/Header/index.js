import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return(
        <div className="Header">
            <h1 className="appName">Covinder!</h1>
            <Link to="/Signup">
              <button>Sign Up</button>
            </Link>
            <h1 className="routeLinks">test</h1>
        </div>
    ) 
}

export default Header