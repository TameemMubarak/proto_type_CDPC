import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Button } from 'bootstrap'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50? setSticky(true): setSticky(false);
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
   const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
   }
  return (
   
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} className='logo' alt="university-Icon" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonals</li>
            <li>
                <button className='btn'>Contact Us</button>
            </li>
        </ul>
        <img onClick={toggleMenu} src={menu_icon} alt="" className='menu-icon' />
    </nav>
  )
}

export default Navbar
