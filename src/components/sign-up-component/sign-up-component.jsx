import React, { Component } from 'react'
import './sign-up-component.scss'
import firebase from 'firebase/app'
import 'firebase/auth'
import {StyledFirebaseAuth} from 'react-firebaseui'
import {TextField , Button} from '@material-ui/core'
import { withRouter  } from 'react-router-dom'

const uiConfig = {
    signInFlow : 'popup',
    signInSuccessUrl : '/' , 
    signInOptions : [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID ,
        firebase.auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD 

    ] 
};

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            email : '' ,
            password : '',
            confirmPassword : '',
            disabled :  false ,
            error : '',
        }
    }

    handleSubmit = async event =>{
        event.preventDefault() ;
        const {email , password , confirmPassword} = this.state
        firebase.auth().createUserWithEmailAndPassword(email , password).then(res => {console.log(res)}).catch(e => {this.setState({error : (e.message)})})
        if (password !== confirmPassword){
            alert('Your Password is not equivalent a your Confirm Password')
        }
    }
    handleChange = event =>{
        const {value , name} = event.target ;
        this.setState({[name] : value })
    }
    render(){
        const {email , password , confirmPassword  } = this.state

        return(
            <div className="page-sign">
            <div className="Log-up">
                <h1 className="Log-in-title">Sign Up NOW</h1>
                <div className="inputs">
                    <form className="form-SignIn" onSubmit={this.handleSubmit}>
                        <TextField  value={email}   onChange={this.handleChange} name="email" type='email' label="Email"  />
                        <TextField  value={password}  fullWidth={false}  onChange={this.handleChange} name="password" type='password' label="Password"  />
                        <TextField  value={confirmPassword} onChange={this.handleChange}   name="confirmPassword" type='password' label="ConfirmPassword"  />
                        <Button className="button-sign" type="submit" variant='contained' color='primary'>
                            Sign UP
                        </Button>
                        <StyledFirebaseAuth uiConfig={uiConfig} className="button-sign-google"  firebaseAuth={firebase.auth()} />
                        <span color='danger'>{this.state.error}</span>
                    </form>
                </div>
            </div>
        </div>
        )
    }
};

export default withRouter(SignUp) ;