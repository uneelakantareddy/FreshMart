import React, { useContext } from 'react'
import Header from './components/Layout/Header'
import LoginForm from './components/Login/LoginForm'
import AuthContext from './AuthContext/AuthContext'

function App() {
  const authCtx = useContext(AuthContext)
  const isLogged = authCtx.islogedin
  return (
    <React.Fragment>
      {!isLogged && <LoginForm />}
      {isLogged && <Header />}
    </React.Fragment>
  )
}

export default App
