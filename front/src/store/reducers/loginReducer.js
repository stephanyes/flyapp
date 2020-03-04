import { USER_LOGIN, USER_LOGOUT } from './constants';

const initialState = {
    loginUser: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Single
        case USER_LOGIN:
            return {
                ...state,
                loginUser: [...state.loginUser, action.user]
            }
        case USER_LOGOUT:
            return {
                loginUser: []
            }
        default:
            return state;
    }
}