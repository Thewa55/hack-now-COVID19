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
              <Link to="/Profile">
                <button>Profile</button>
              </Link>
              </>)
            }
        </div>
    ) 
}

export default Header