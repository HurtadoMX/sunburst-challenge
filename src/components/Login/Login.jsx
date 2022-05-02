import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {

    const {loginWithRedirect, user }=useAuth0()
console.log(user)
  return (
    <div><h1>Aplicacion</h1>
        <button onClick={()=>loginWithRedirect()}>Login</button>
    </div>
  )
}

export default Login