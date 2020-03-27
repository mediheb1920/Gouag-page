import ShopApi from './shop.data'
import {CartActionsitems} from './cart-types'
import { addItemToCart , removeItemToCart} from './shop-utils'
const INITIAL_STATE = {
    collections : ShopApi , 
    cartItems : []
};


const shopReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case CartActionsitems.ADD_ITEM :
            return {
                ...state,
                cartItems : addItemToCart(state.cartItems , action.payload)
            }
        case CartActionsitems.REMOVE_ITEM : 
            return {
                ...state , 
                cartItems : removeItemToCart(state.cartItems , action.payload)
            }
        default : 
            return state ;
    }
}
export default shopReducer;