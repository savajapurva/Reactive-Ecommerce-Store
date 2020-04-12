import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/icon.svg'
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartToggle} from '../../redux/cart/cart.selector';

const Header = ({currentUser, hidden}) => (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link to='/shop' className="option">
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>
                {
                    currentUser ?  (
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    )
                    : (
                        <Link className='option' to="/signin">SIGN IN</Link>
                    )
                }
                <CartIcon/>
            </div>
            {hidden ? null : <CartDropdown/>}
        </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartToggle
})
 
export default connect(mapStateToProps)(Header);