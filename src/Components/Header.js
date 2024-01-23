import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../Assest/Images/Logo.png';

const Header = () => {
  return (
    <div className='header' >
        <div className='logo'>
            <img src={Logo} alt='logo-image' className='logo-img' />
        </div>
        <ul className='navbar'>
            {/* <li className='nav-item'>
                <NavLink  to = '/'>Login</NavLink >
            </li> */}
            <li className='nav-item'>
                <NavLink  to = '/home'>Home</NavLink >
            </li>
        </ul>
    </div>
  )
}

export default Header;