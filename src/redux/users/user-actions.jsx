import { UserActionTypes } from './user.types';

export  const setUser = user => ({
    type : UserActionTypes.SET_CURRENT_USER,
    payload : user
});
