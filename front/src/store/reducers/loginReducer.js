import { USER_LOGIN, USER_LOGOUT } from './constants';

const initialState = {
    loginUser: {} // loginUser era un arreglo, ahora es un objeto (queremos solo 1 loggeado)
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Single
        case USER_LOGIN:
            // return {
            //     ...state,
            //     loginUser: [...state.loginUser, action.user]
            // }
            // console.log(action.user)
            return Object.assign({}, state, { loginUser: action.user }); //action.user = req.user de rutas
        case USER_LOGOUT:
            return Object.assign({}, state, { loginUser: action.user }); // action.user = {}

        default:
            return state;
    }
}