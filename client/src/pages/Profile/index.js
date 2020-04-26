import React, { useEffect, useState } from 'react'
import API from '../../utils/API'
import { useStoreContext } from '../../utils/GlobalState'

function Profile(){
  const [request, setRequest] = useState([])
  const [state, dispatch] = useStoreContext()

  return(
    <div>
      <h1>My Profile</h1>
      
    </div>
  )
}

export default Profile;