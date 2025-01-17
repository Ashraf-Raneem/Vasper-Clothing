import React from 'react'

import CustomButtom from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './signUp.styles.scss'

class SignUp extends React.Component {
    constructor (){
        super()

        this.state = {
            displayName : '',
            email :'',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password , confirmPassword} = this.state

        if (password != confirmPassword) {
            alert('Passwards dont match')
            return
        }
        
        try {
            const {user} = await auth.createUserwithEmailAndPassword(email,password)
            createUserProfileDocument(user , {displayName})

            this.setState ({
                displayName :'',
                email : '',
                password : '',
                confirmPassword : ''
            })

        }catch (error) {
            console.log (error)
        }

    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({[name] : value})
    }

    render (){
        const {displayName, email, password , confirmPassword} = this.state
        return (
            <div className='sign-up-form'>
                <h2>I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className='title' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange= {this.handleChange}
                        label='Display Name'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='email'
                        name='Email'
                        value={email}
                        onChange= {this.handleChange}
                        label='email'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange= {this.handleChange}
                        label='password'
                        required
                    >
                    </FormInput>

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange= {this.handleChange}
                        label='Confirm Password'
                        required
                    >
                    </FormInput>

                    <CustomButtom type='submit' > SIGN UP </CustomButtom>
                </form>
            </div>
        )
    }
}
export default SignUp