import React, { useContext } from 'react'
import AuthContext from '../../AuthContext/AuthContext'
import './Logout.scss'

const Logout = () => {
  const authCtx = useContext(AuthContext)
  const logoutHanlder = () => {
    authCtx.logout()
  }
  return (
    <button className="logout__btn" onClick={logoutHanlder}>
      Logout
    </button>
  )
}

export default Logout
