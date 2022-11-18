import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'
import Cart from '../../molecules/Cart/Cart'
import useFormLogin from "../../../utils/useFormLogin"
import "./Navbar.scss";
import { logout } from '../../../service/Auth';
const Navbar = () => {
  const location = useLocation();
    const { getEmail, removeEmail } = useFormLogin();
    let searchQuery = location.pathname;
    let data = <div></div>;
    let logoutBtn = <div></div>;
    if (getEmail() === null) {
        data = <div></div>;
    } else {
        if (searchQuery === "/") {
            data = <div></div>;
            logoutBtn = <div></div>;
            removeEmail();
        } else if (searchQuery === "/Register") {
            data = <div></div>;
            logoutBtn = <div></div>;
            removeEmail();
        } else {
            data = (
                <span className="header__welcome-user">
                    <span className="welcome-text">Hello&nbsp;</span>
                    {getEmail()}
                </span>
            );
            logoutBtn = (
                <Link
                    to="/"
                    className="header__sub-container__nav-wrapper__login__link"
                    onClick={logout}>
                    &nbsp;Logout
                </Link>
            );
        }
    }
  
    return (
        <header className="header">
      <div className="header__sub-container">
        <Link to="/home">
          <Logo />
        </Link>
        <nav className="header__sub-container__nav-items">
          <Link to="/home" className="header__sub-container__nav-items__link">
            Home
          </Link>
          <Link
            to="/Products"
            className="header__sub-container__nav-items__link"
          >
            Products
          </Link>
        </nav>
        <div className="header__sub-container__nav-wrapper">
          {getEmail()!==null ? (
            <nav className="header__sub-container__nav-wrapper__login">
            <span  className="header__sub-container__nav-wrapper__login__link">
              {data}
              </span>
              <span>
            {logoutBtn}
              </span>
          </nav>
          ):(
          <nav className="header__sub-container__nav-wrapper__login">
            <Link
              to="/"
              className="header__sub-container__nav-wrapper__login__link"
            >
              Signin
            </Link>
            <Link
              to="Register"
              className="header__sub-container__nav-wrapper__login__link"
            >
              Register
            </Link>
          </nav>
          )}
          <Cart />
        </div>
        
      </div> 
    </header>
  )
}
export default Navbar;


