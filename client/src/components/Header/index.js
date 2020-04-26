import React from 'react';
import {Link} from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState'

function Header(props) {
  const [state,dispatch] = useStoreContext()

  return(
        <div className="Header">
            <h1 className="appName">Covinder!</h1>
            <Link to="/">
              <button>Home</button>
            </Link>
            {state.currentUser.firstname === "" ? (<> 
              <Link to="/Signup">
                <button>Sign Up</button>
                </Link>
                <Link to="/Login">
                <button>Login</button>
                </Link>
              </>):(
              <>
                <button>Logout</button>
              </>)
            }
        </div>
    ) 
}

export default Header