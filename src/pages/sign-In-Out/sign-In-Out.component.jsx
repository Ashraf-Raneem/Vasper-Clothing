import React from 'react'; 
import './sign-In-Out.styles.scss';

import SignUp from '../../component/sign-up/signUp.component'
import SignIn from '../../component/sign-in/sign-in.component'

const signInAndSignOutPage = () => (
    <div className="signInAndSignOutPage"> 
    <SignIn></SignIn>
    <SignUp></SignUp>
    </div>
)
export default signInAndSignOutPage; 