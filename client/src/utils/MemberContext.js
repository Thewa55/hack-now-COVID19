import React from 'react'

const MemberContext = React.createContext({
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: ""
})

export default MemberContext;