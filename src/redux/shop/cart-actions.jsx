import {CartActionsitems} from './cart-types'

export const addItem = item =>({
    type : CartActionsitems.ADD_ITEM,
    payload  : item 
});
export const removeItem = item =>({
    type : CartActionsitems.REMOVE_ITEM,
    payload : item
})