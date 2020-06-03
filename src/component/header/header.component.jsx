import React from 'react'; 
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux'

import CartItem from '../cart-items/cart-items.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'; 


const Header = ({currentUser,hidden}) => (
    <div className= "header"> 
        <Link className= "logo-container" to= "/"> 
        <Logo className= "Logo"></Logo>
        </Link>
        <div className= "options">
            <Link className= "option" to= "/shop"> Shop </Link>
            <Link className= "option" to = "/contact">Contact</Link>
        {
            currentUser ?
            <div className="option" onClick = {() => auth.signOut()}>Sign Out</div>
            :
            <Link className="option" to='/signIn'>Sign In</Link>
        }
            <CartItem/>
           { hidden ? null :  <CartDropdown/>}
        </div>
    </div>
)

const mapStateToProps = ({user : {currentUser}, cart : {hidden} }) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Header); 