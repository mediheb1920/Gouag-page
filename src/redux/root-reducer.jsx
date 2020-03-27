import {combineReducers} from 'redux'
import userReducer from './users/user.reducer'
import shopReducer from './shop/shop-reducer'


export default combineReducers({
    users : userReducer,
    shop : shopReducer
})
