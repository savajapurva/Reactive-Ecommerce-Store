import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/icon.svg'
import './header.styles.scss';

const Header = () => {
    return ( 
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
            <Link to='/shop' className='logo-container'>
                SHOP
            </Link>
            <Link to='/contact' className='logo-container'>
                CONTACT
            </Link>
            </div>
        </div>
     );
}
 
export default Header;