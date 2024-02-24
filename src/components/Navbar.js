import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
   
    return(
        <>
          <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
               <span><img alt='' src='/images/cross.png' className='nav-logo'/></span> Push for Christ Intl. Ministries
                </Link>
                
                <ul >
                    <li><Link to="/Contact">Contact Us</Link></li>
                    
                </ul>
          </nav>
        </>
    )
}


export default Navbar