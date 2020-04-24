import React, { Component } from 'react'
import './navbar-component.scss'
import { Link , withRouter } from 'react-router-dom'
import  Logo from "../../images/Gouha.png"
import * as firebase from 'firebase/app';
import { Avatar , Hidden } from '@material-ui/core';
import 'firebase/auth'
class  Navbar extends Component{
        constructor(){
            super();
            this.state = {
                user : {} ,
                displayName : '' , 
                photoUrl : ''
            }
        }
        user = null
        componentDidMount(){
           this.user = firebase.auth().onAuthStateChanged(user =>{
            if (user){
                this.setState({user , displayName : user.displayName , photoUrl : user.photoURL})
                
            }else{
                this.setState({user : null})
                
            }
            
            
        });
    }
    componentWillUnmount(){
        this.user()
    }



    render(){
        const {user , displayName , photoUrl} = this.state
        console.log(user)
        return(
    <div className="navbar">
            <div className="logo-content">
                <img src={Logo} alt="logo" />
            </div>
        <Hidden mdDown>
        <div className="Navbar-link">
            <Link to='/pageMarket' style={{ textDecoration: 'none' }}><span className="item-link1">&#9876;Discover</span></Link>
            <Link to='/' style={{ textDecoration: 'none' }}><span className="item-link">About US</span></Link>
            <Link to='/' style={{ textDecoration: 'none' }}><span className="item-link">Contact Us</span></Link>
        </div>
        </Hidden>
        <div className="Navbar-account">
            
            { user ? (<span className="SignIn" onClick={() => firebase.auth().signOut()} >SignOut</span>)  : (<Link to='/SignIn' style={{ textDecoration: 'none' }}>
                <span className="SignIn">
                    Sign In
                </span>
                </Link>)}
            { user ? <div className="user-information">
                        <span className="displayName">{displayName}</span> 
                        <Avatar src={photoUrl}  alt="imageUser"/>
                    </div>
             :
                <Link to='/SignUp' style={{ textDecoration: 'none' }}>
                    <span className="joinFree">
                        Join For Free
                    </span>
                </Link>
            }
        </div>
    </div>
        )
    }
};
export default withRouter(Navbar) ;
