import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthContext from '../../AuthContext/AuthContext'
import './LoginForm.scss'

const LoginForm = () => {
  const navigate = useNavigate()
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const authCtx = useContext(AuthContext)

  const emailHandler = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  const passwordHandler = (event) => {
    event.preventDefault()
    setPassword(event.target.value)
  }

  const submitformHandler = (event) => {
    event.preventDefault()
    setIsLoading(true)

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFP_oVazAEhsplQO-8PHrhGgM0CFdzzk8',
      {
        method: 'POST',
        body: JSON.stringify({
          email: Email,
          password: Password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(async (response) => {
        setIsLoading(false)
        if (response.ok) {
          let successmsg = 'Login Done Successfully...'
          alert(successmsg)
          return response.json()
        } else {
          const data = await response.json()
          let errorMessage = 'Authentication failed!'
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message
          }
          // throw new Error(errorMessage)
          alert(errorMessage)
        }
      })
      .then((data) => {
        authCtx.login(data.idToken)
        navigate('/Home')
        console.log(data.idToken)
      })
  }
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={submitformHandler}>
          <input
            type="text"
            placeholder="username"
            required={true}
            value={Email}
            onChange={emailHandler}
          />
          <input
            type="password"
            placeholder="password"
            required={true}
            value={Password}
            onChange={passwordHandler}
          />
          {!isLoading && <button>login</button>}
          {isLoading && <p>Sending Request...</p>}
          {/* <p className="message">
            Not registered?{' '}
            <NavLink to="/SignupForm">Create an account</NavLink>
          </p> */}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
