import React from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsTotal } from '../../redux/shop/shop-selectors'
import { connect } from 'react-redux'
import { PayPalButton } from "react-paypal-button-v2";


const Total = ({total}) =>{
    return(
    <div>
        <h3>{total}DT</h3>
        <PayPalButton
        amount={total}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
 
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "AarfFGXsZdgLCEhsEonW5aqjonajmwQWI0SQs-MeFMjSXPZ3mZjy1Gu6aB3PL2JKmRO22gQcVVmnvixm"
        }}
      />
        
    </div>
    )
    }


const mapStateToProps = createStructuredSelector({
    total : selectCartItemsTotal
})

export default connect(mapStateToProps)(Total)