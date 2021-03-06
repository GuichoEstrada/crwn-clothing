import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-button.component';
import { auth, signInWIthGoogle } from '../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})

        } catch (error) {
            console.error(error)
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value});
    }

    render() {
        const { email, password } = this.state;
        return(
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} handleChange={this.handleChange} label='Email' required/>
                    <FormInput name='password' type='password' value={password} handleChange={this.handleChange} label='Password' required/>

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWIthGoogle} isGoogleSignIn>Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;