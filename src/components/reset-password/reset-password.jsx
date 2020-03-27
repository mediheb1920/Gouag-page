import React, { Component } from 'react'
import './reset-password.scss'
import * as firebase from 'firebase';
import 'firebase/auth'
import Alert from '@material-ui/lab/Alert';
import {TextField , Button} from "@material-ui/core"
class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailReset : '',
            successReset : false,
            error : '' , 
            failedReset : false 
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {emailReset } = this.state
        firebase.auth().sendPasswordResetEmail(emailReset).then( () => {
            // window.alert('your ResetPasswordLink sended to Your email check your inbox');
            this.setState({successReset : true})
            
        }).catch(error => this.setState({ error : error.message , successReset : false})
    )}
    handleChange = event =>{
        const {value , name} = event.target ;
        this.setState({[name] : value })
        }

    render(){
        const {emailReset , successReset ,  error} = this.state
        return(
            <div className="page-signin">
            <div className="Log-in">
                <h1 className="Log-in-title">Reset Password</h1>
                <div className="inputs">
                    { successReset ? <Alert variant="filled" severity="success">An email with password reset instructions has been sent to your email address</Alert>
                     : <Alert variant="filled" severity="error">{error}</Alert>
                    }
                    
                    <form className="form-SignIn" onSubmit={this.handleSubmit}>
                        <TextField  value={emailReset}   onChange={this.handleChange}  name="emailReset" type='email' label="Email"  />
                        <Button className="button-sign" type="submit" variant='contained' color='primary'>
                            Reset Password
                        </Button>
                    </form>
                </div>
            </div>
        </div>
        )
    }



};
export default ResetPassword ;