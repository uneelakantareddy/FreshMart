import React, { createContext, useState } from 'react'
const AuthContext = createContext({
  token: '',
  islogedin: false,
  login: (token) => {},
  logout: () => {},
})

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem('token')
  const [token, setToken] = useState(intialToken)
  const userIsLoggedIn = !!token
  const loginHandler = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  }
  const logoutHanlder = () => {
    setToken(null)
    localStorage.removeItem('token')
  }
  const contextValue = {
    token: token,
    islogedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHanlder,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
