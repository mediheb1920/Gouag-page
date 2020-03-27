import React, { Component } from 'react'
import {TextField , Button, Link} from '@material-ui/core'
import './sign-in-component.scss'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import {StyledFirebaseAuth} from 'react-firebaseui'
// firebase.initializeApp(firebaseConfig);
const uiConfig = {
    signInFlow : 'popup',
    signInSuccessUrl : '/' , 
    signInOptions : [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID ,
        firebase.auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD 

    ] 
};



class SignIn extends Component  {
    constructor(){
        super();
        this.state={
            email : '' ,
            password : '',
            error : '' , 
            user : {} ,
            emailLink : ''
        }
    }
    user = null

        componentDidMount(){
             
           this.user = firebase.auth().onAuthStateChanged(user =>{
            
            if (user){
                this.setState({user , emailLink : user.email})
                
                
                
            }else{
                this.setState({user : null})
                
            }
            
            
        });
    }
    componentWillUnmount(){
        this.user()
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const{email , password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email , password).then(res => { console.log(res) }).catch(e => {this.setState({error : (e.message)})})
    }
    handleChange = event =>{
        const {value , name} = event.target ;
        this.setState({[name] : value })
        }
    

    
    
    render(){
        const {email , password } = this.state
        return(
        <div className="page-signin">
            <div className="Log-in-sign">
                <h1 className="Log-in-title">Sign In Now</h1>
                <div className="inputs">
                    <form className="form-SignIn" onSubmit={this.handleSubmit}>
                        <TextField  value={email}   onChange={this.handleChange} name="email" type='email' label="Email"  />
                        <TextField  value={password}  fullWidth={false}  onChange={this.handleChange} name="password" type='password' label="Password"  />
                        <Button className="button-sign" type="submit" variant='contained' color='primary'>
                            Sign IN 
                        </Button>
                        <span className="text">I forgot my password? <Link  href='/Reset-Password'>Click Here!</Link></span>
                        <span className="text">I haven't an account ? <Link href='http://localhost:3000/SignUp'>Sign Up</Link></span>
                        <StyledFirebaseAuth uiConfig={uiConfig} className="button-sign-google"  firebaseAuth={firebase.auth()} />
                        <span color='danger'>{this.state.error}</span>
                    </form>
                </div>
            </div>
        </div>
    )
    }

}
export default SignIn ;

