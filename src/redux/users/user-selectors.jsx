import {createSelector} from 'reselect'

const selectUser = state => state.users 

export const selectUserLogin = createSelector(
    [selectUser],
    users => users.user
)