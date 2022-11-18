import React from 'react'
import logo from '../../../static/images/logo.png'
import "./Logo.scss"
const Logo = props => {
  return (
    <img src = {logo} className='logo-image'
    alt = 'LogoImage' />
  )
}

export default Logo