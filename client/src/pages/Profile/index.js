import React, { useEffect, useState } from 'react'
import API from '../../utils/API'

function Profile(){
  const [request, setRequest] = useState([])

  function getRequests() {
    API.getRequests
      .then(res => setRequest(res.data))
  }

  useEffect(() => {
    getRequests()
  }, [])

  return(
    <div>
      <h1>My Profile</h1>
      
    </div>
  )
}

export default Request;