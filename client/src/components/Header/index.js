import React from 'react';
import {Link} from "react-router-dom";
import Modal from '../../components/Modal'

import { useStoreContext } from '../../utils/GlobalState'

function Header(props) {
  const [state,dispatch] = useStoreContext()

  return(
        <div className="Header">
            <h1 className="appName">Covinder!</h1>
            <Link to="/">
              <button className="ui button" >Home</button>
            </Link>
            <Link to="/Request">
              <button className="ui button" >Requests</button>
            </Link>
            <Modal />
            {state.currentUser.firstname === "" ? (<> 
              <Link to="/Signup">
                <button className="ui button" >Sign Up</button>
              </Link>
              <Link to="/Signin">
                <button className="ui button" >Sign In</button>
              </Link>
              </>):(
              <>
              <Link to="/Profile">
                <button className="ui button" >Profile</button>
              </Link>
              </>)
            }
        </div>
    ) 
}

export default Header