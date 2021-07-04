import React from 'react';
import './signin-signup.styles.scss'

import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;