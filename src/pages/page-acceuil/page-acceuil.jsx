import React, { Component } from 'react'
import './page-acceuil.scss'
import Navbar from '../../components/navbar-component/navbar-component'
import {ReactComponent as LogoAccrual} from '../../images/acceuil-image.svg'
import {ReactComponent as LogoShop} from '../../images/shop.svg'
import {ReactComponent as LogoCoins} from '../../images/coins.svg'
import {ReactComponent as LogoSHopping} from '../../images/shopping-cart.svg'
import '../../custom.scss'
import IconPart from '../../components/icons-component/icon-component'
import { Switch, withRouter } from 'react-router-dom'
import * as firebase from 'firebase/app';
import 'firebase/auth'


class Acceuil extends Component {
    constructor(){
        super();
        this.state={
            user : {} , 
            displayName : '' ,
            imageUrl : '' 
        }
    }

            user = null 
        componentDidMount(){
            this.user = firebase.auth().onAuthStateChanged(user =>{
             if (user){
                 this.setState({displayName : user.displayName , imageUrl : user.photoURL}) 
                 
             }else{
                 this.setState({user : null})
                 
             }
             
             
            });
        }


        componentWillUnmount(){
            this.user()
        }


    render(){
        return(
    <div className="Home-page">
        <div className="acceuil">
            <Switch>
                <Navbar  />
            </Switch>
            <div className="content-acceuil">
                <div className="text-acceuil">
                    <h1 className="title-text">Life Mode Easy</h1>
                    <div className="span-text">
                        <span className="span-text">Everything Needed to make your Life virtual more Perfect !</span>
                    </div>
                    {this.state.user ?<a className="button-home" href='/pageMarket'>GET STARTED FOR FREE</a> : <a className="button-home" href='/SignIn'>GET STARTED FOR FREE</a>}
                </div>
                <div className="LogoAcceuil">
                    <LogoAccrual />
                </div>
            </div>
        </div>
        <div className="content-home">
            <div className="title-home">
                <h1>GouhaG Online store :   Gift cards , Topup </h1>
                <span className="text-content">-purchase just in your home</span>
            </div>
        </div>
        
        <div  className="card-home   row card-deck">
                
                    <div className="card-header card card1 col-lg-12 col-md-12  col-12">
                            <LogoShop style={{width:"50%" , height:"60%" , margin:"auto"  }}/>
                        <div className="card-body">
                            <h5 className="card-title">Gift Cards</h5>
                            <p className="card-text">GooglePlay!  Paypal , cashu , Ps4 , Steam , amazon</p> 
                            <p className="card-text">Everything needed is available</p>
                        </div>
                            <a href="/pageMarket" className="button1">Shop Now</a>
                    
                    </div>
                    
                
                <div className="card-header card card2  col-lg-12  col-12">
                        <LogoSHopping style={{width:"50%" , height:"50%" , margin:"auto"  }}/>
                    <div className="card-body">
                        <h5 className="card-title">Abonnements</h5>
                        <p className="card-text">Netflix ! Spotify , Iptv , Origin , PlaystionPremium </p> 
                        <p className="card-text">Enjoy With Us</p>
                    </div>
                    <a href="/" className="button1">Shop Now</a>
                </div>
                
                
                <div className="card-header card card3 col-lg-12  col-12">
                        <LogoCoins style={{width:"50%" , height:"50%" , margin:"auto"  }}/>
                    <div className="card-body">
                        <h5 className="card-title">TopUp</h5>
                        <p className="card-text">FreeFire , Pubg , Fortnite , Fifa20 , Apex </p> 
                        <p className="card-text">Expert in Your Game</p>
                    </div>
                    <a href="/" className="button1">Shop Now</a>
                </div>
                
                     
        </div>
        <IconPart />
        <div className="sponsor-icons">
            <div className="icons-spon-part">
            <span className="sponsor-para col-12 text-center">Trusted by leading brands</span>
            <img src={require('../../images/google-play.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/steam.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/logo-apple.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/Spotify_Logo.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/free-fire.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/logo-facebook.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/logo-hotwheels.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/logo-lego.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/netflix-logo-png-2562.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/playstation-4.png')} width="120px" height="80px" className="imag-spon col-md-2 col-4" alt="cam"/>
            <img src={require('../../images/pubg_PNG57.png')} width="120px" height="80px" className="imag-spon col-md-4 col-4" alt="cam"/>
            </div>
            <div className="commentary-part">

            </div>
        </div>
        </div>
        );
    }
    

};
export default withRouter(Acceuil) ;