import React, { Component } from 'react';
import './App.css';
import { Route, Redirect , withRouter } from 'react-router-dom'
import Acceuil from './pages/page-acceuil/page-acceuil';
import SignIn from './components/Sign-In-component/Sign-In-component';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import  FirebaseConfig from "./firebase/firebase-config"
import SignUp from './components/sign-up-component/sign-up-component';
import ResetPassword from './components/reset-password/reset-password';
import { connect } from 'react-redux'
import {setUser} from './redux/users/user-actions'
import ShopPage from './pages/shop/shop.component';
import {createStructuredSelector} from 'reselect'
import { selectUserLogin } from './redux/users/user-selectors';



firebase.initializeApp(FirebaseConfig);
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth , additionalData ) => {
  if(!userAuth) return ;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName , email} = userAuth 
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName , email , createdAt , ...additionalData
        
      })

    }catch(error){
      console.log('error' , error.message)
    };
  }
    return userRef ;
  

}


class  App extends Component { 
  
  user = null ;
    

  componentDidMount(){
    const {setUser} = this.props
    this.user = firebase.auth().onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          console.log(snapShot)
            setUser  ({
              id : snapShot.id ,
              ...snapShot.data()
            })
          
          
        })
        
       }else{
         setUser (userAuth) 
         
       }
     
     });
     
   
}
  componentWillUnmount() {
    this.user()
  }
    
   
  
  
  render(){
    const {user } = this.props.setUser
    console.log(user)
  
    
    
    
  return (
    
   <div>
     
     <Route exact path='/' component={Acceuil}/>
     <Route  path='/pageMarket' component={ShopPage} />
     <Route exact path='/SignIn'  render={() => this.props.user ? (<Redirect to='/pageMarket' />) : (<SignIn />)}/>
     <Route exact path='/SignUp'  render={() => this.props.user ? (<Redirect to='/pageMarket' />) : (<SignUp />)}/>
     <Route exact path='/Reset-Password' component={ResetPassword} />
   </div>
  );
  }
}
const mapStateToProps = createStructuredSelector({
  user : selectUserLogin 
})
const mapDispatchToProps = dispatch => ({
  setUser : user => dispatch(setUser(user))
})
export default connect(mapStateToProps , mapDispatchToProps ) (withRouter(App));
