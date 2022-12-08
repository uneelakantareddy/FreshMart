import React, { useContext } from 'react'
import './Header.scss'
import freshmartlogo from '../../assets/freshmart-logo-nav.svg'
import CartButton from '../cart/CartButton'
import Navigator from '../pages/Navigator'
// // import Navbar from '../pages/Navbar'
import AuthContext from '../../AuthContext/AuthContext'
import Logout from '../Login/Logout'

const Header = () => {
  const authCtx = useContext(AuthContext)
  const isLogged = authCtx.islogedin
  console.log(isLogged)
  return (
    <React.Fragment>
      <header>
        <div className="header">
          {/* <div > */}
          <img className="header__logo" src={freshmartlogo} alt="Freshmart" />
          {/* </div> */}
        </div>

        <CartButton />
        <Logout />
      </header>
      <Navigator />
    </React.Fragment>
  )
}

export default Header
