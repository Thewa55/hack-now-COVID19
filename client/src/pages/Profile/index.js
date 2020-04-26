import React, { useEffect, useState } from 'react'
import API from '../../utils/API'
import { useStoreContext } from '../../utils/GlobalState'

function Profile(){
  const [request, setRequest] = useState([])
  const [state, dispatch] = useStoreContext()

  console.log(state, 'state for profile')
  console.log(state.currentUser,state.currentUser.id, 'id')

  const {firstname, lastname, email, phonenumber} = state.currentUser
  console.log(firstname, lastname, email, phonenumber)
  return(
    <div className="Profile">
      <h1>Hello {firstname} {lastname}!</h1>
      <h2>Your contact information:</h2>
      <br/>
      <h3>Email: {email} </h3>
      <h3>Phone Number: {phonenumber} </h3>
    </div>
  )
}

export default Profile;