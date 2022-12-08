import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignupForm = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFP_oVazAEhsplQO-8PHrhGgM0CFdzzk8',
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
    ).then((response) => {
      setIsLoading(false)
      if (response.ok) {
        let successmsg = 'Account Created Successfully...'
        alert(successmsg)
      } else {
        return response.json().then((data) => {
          let errormsg = 'Authentication Failed !'
          if (data && data.error && data.error.message) {
            errormsg = data.error.message
          }
          alert(errormsg)
        })
      }
    })
  }

  return (
    <div className="signup-page">
      <div className="form">
        <form className="signup-form" onSubmit={submitformHandler}>
          <input
            type="text"
            placeholder="email address"
            required={true}
            value={Email}
            onChange={emailHandler}
          />
          <input
            type="password"
            placeholder="password"
            required={true}
            onChange={passwordHandler}
            value={Password}
          />
          {!isLoading && <button>create</button>}
          {isLoading && <p>Sending Request...</p>}
          <p className="message">
            Already registered? <NavLink to="/">Sign In</NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignupForm
