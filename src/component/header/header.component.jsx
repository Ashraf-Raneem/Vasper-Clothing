import React from 'react'; 
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss'; 

const Header = ({currentUser}) => (
    <div className= "header"> 
    <Link className= "logo-container" to= "/"> 
    <Logo className= "Logo"></Logo>
    </Link>
    <div className= "options">
        <Link className= "option" to= "/shop"> Shop </Link>
        <Link className= "option" to = "/contact">Contact</Link>
    </div>
    {
        currentUser ?
        <div className="option" onClick = {() => auth.signOut()}>Sign Out</div>
        :
        <Link className="option" to='/signIn'>Sign In</Link>
    }
    </div>
)
export default Header; 