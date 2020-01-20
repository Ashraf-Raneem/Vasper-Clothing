import React from 'react'; 
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
import './header.styles.scss'; 
const Header = () => (
    <div className= "header"> 
    <Link className= "logo-container" to= "/"> 
    <Logo className= "Logo"></Logo>
    </Link>
    <div className= "options">
        <Link className= "option" to= "/shop"> Shop </Link>
        <Link className= "option" to = "/contact">Contact</Link>
    </div>
    </div>
)
export default Header; 