import React, { useEffect, useState } from 'react'
import API from '../../utils/API'

function Request(){
  const [request, setRequest] = useState([])

  function getRequests() {
    API.getRequests()
      .then(res => setRequest(res.data))
  }

  useEffect(() => {
    getRequests()
  }, [])

  return(
    <div>
      Request Page
    </div>
  )
}

export default Request;