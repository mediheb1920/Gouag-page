import React from 'react'
import './icon-component.scss'
// import {Svgr} from '@svgr/webpack'

import {ReactComponent as Controller} from '../../images/Controller.svg'
import{ ReactComponent as CreditCard} from '../../images/Credit-card.svg'
import{ ReactComponent as Gifts} from '../../images/Gifts.svg'
import{ ReactComponent as Quality} from '../../images/Quality.svg'
import{ ReactComponent as Delivery} from '../../images/Delivery.svg'
import{ ReactComponent as Shield} from '../../images/Shield.svg'
 





const IconPart = () =>(
    <div className="Discover-part">
        <div className="icons">
            <div className="icons-part  row">
                <div className="icon mr-md-3 col-md-4 col-lg-3  col-6 ">
                    <Controller style={{width :"100px" , height : "100px"}} />
                    <span className="title-logo">+ 1000 Products</span>
                </div>
                <div className="icon mr-md-3 col-md-4 col-lg-3 col-6">
                    <CreditCard style={{width :"100px" , height : "100px"}}/>
                    <span className="title-logo">Pay with Your Card</span>
                </div>
                <div className="icon mr-md-3 col-md-4 col-lg-3 col-6">
                    <Gifts style={{width :"100px" , height : "100px"}}/>
                    <span className="title-logo">Gifts Free</span>
                </div>
                <div className="icon mr-md-3 col-md-4 col-lg-3 col-6">
                    <Quality style={{width :"100px" , height : "100px"}} />
                    <span className="title-logo">100 % Guaranty</span>
                </div>
                <div className="icon mr-md-3 col-md-4 col-lg-3 col-6">
                    <Shield style={{width :"100px" , height : "100px"}} />
                    <span className="title-logo">Secure Payments</span>
                </div>
                <div className="icon mr-md-3 col-md-4 col-lg-3 col-6">
                    <Delivery style={{width :"100px" , height : "100px"}} />
                    <span className="title-logo">Fast Delivery</span>
                </div>

            </div>
        </div>
        <div className="text-part">
                <span className="title-para">The #1 Boutique Online In Tunisia</span>
                <p className="paragraph-part">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem sed risus ultricies tristique nulla aliquet. Et leo duis ut diam quam nulla porttitor massa. Convallis convallis tellus id interdum velit laoreet. Donec ac odio tempor orci dapibus ultrices in.</p>
       </div>

    </div>
);
export default IconPart ;