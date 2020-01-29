import React from 'react'; 
import signInWithGoogle from '../../firebase/firebase.utils'; 
import './sign-in.styles.scss'; 
import CustomButton from '../custom-button/custom-button.component'; 
import  FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor(props){
        super (props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({email:" ",password:" "})
    }

    handleChange = e => {
        const {value, name} = e.target; 
        this.setState({[name]: value})
    }

    render () {
        return (
            <div className= "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>                
                    <FormInput name="email" type="email" value= {this.state.email} label= "email" handleChange= {this.handleChange} required></FormInput>
                    <FormInput name="password" type = "password" value = {this.state.password} label= "password" handleChange= {this.handleChange} required></FormInput>
                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{' '}Sign in with google{' '}</CustomButton>
                </form>
            </div>

        )
    }
}
export default SignIn; 