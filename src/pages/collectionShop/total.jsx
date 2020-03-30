import React , {useState, useRef, useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsTotal,  selectCartItemsName } from '../../redux/shop/shop-selectors'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";



const Total = ({total , name}) =>{
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);
    let paypalRef = useRef()
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 
          "https://www.paypal.com/sdk/js?AarfFGXsZdgLCEhsEonW5aqjonajmwQWI0SQs-MeFMjSXPZ3mZjy1Gu6aB3PL2JKmRO22gQcVVmnvixm=sb"
        script.addEventListener("load" , () => setLoaded(true))
        document.body.appendChild(script);
        if(loaded) {
          setTimeout(() => {
            window.paypal
              .Buttons({
                createOrder : (data , actions) => {
                  return actions.order.create({
                    purchase_units : [
                        {
                          description :  name,
                          amount : {
                            currency_code : 'USD',
                            value : total
                          }
                        }
                    ]
                  })
                },
                onApprove : async (data , actions) => {
                  const order = await actions.order.capture();
                  setPaidFor(true)
                  console.log(order)
                }
              })
              .render(paypalRef)
          })
        }
        })
  return(
    <div>
        {paidFor ? 
            <Redirect to='/' />
        : 
        (<div>
          <h3>{total}DT</h3>
          <div>{name}</div>
          <PayPalButton />
        </div>
        )}
        
    </div>
    )
  }


const mapStateToProps = createStructuredSelector({
    total : selectCartItemsTotal,
    name : selectCartItemsName
})

export default connect(mapStateToProps)(Total)