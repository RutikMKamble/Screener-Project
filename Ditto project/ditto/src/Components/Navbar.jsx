import React from 'react'
import Logo from '../Asset/logo.png'
import './Navbar.css'
import MenuIcon from '../Asset/menu.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const [viewNavbar, setViewNavbar] = useState(false);

  return (
    <>
      <header className='navbar-design'>
        <div >
          <Link to='/'>
            <img src={Logo} alt="" className="logo-img" />
          </Link>
        </div>
        <div className='text-center'>
          <div className={viewNavbar ? 'showNavbarOn menuList' : 'menuList'}>
            <Link onClick={() => setViewNavbar(!viewNavbar)} to='/'>
              <button className='no-css-btn mobile-css-btn' >Home</button>
            </Link>
            <Link onClick={() => setViewNavbar(!viewNavbar)} to='/hiring'>
              <button className='hireBtn  mobile-css-btn' >We're hiring!</button>
            </Link>
            <Link onClick={() => setViewNavbar(!viewNavbar)} to="/healthIns" >
              <button className='no-css-btn mobile-css-btn'>Health Insurance</button>
            </Link>
            <Link onClick={() => setViewNavbar(!viewNavbar)} to="/lifeIns">
              <button className='no-css-btn mobile-css-btn'>Life Insurance</button>
            </Link>
            <Link onClick={() => setViewNavbar(!viewNavbar)} to='/buyIns'>
              <button className='buy-ins-btn mobile-css-btn'>Buy Insurance</button>
            </Link>
            <Link onClick={() => setViewNavbar(!viewNavbar)} to='/hotline'>
              <button className='hotLine-btn mobile-css-btn'>Ditto Hotline</button>
            </Link>
          </div>
        </div>
        <div className='menu-Icon-Div'>
          <img className='MenuIcon' src={MenuIcon} alt=""
            onClick={() => setViewNavbar(!viewNavbar)}
          />
        </div>
      </header>
    </>
  )
}

export default Navbar