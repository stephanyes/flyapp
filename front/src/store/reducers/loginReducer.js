import { USER_LOGIN, USER_LOGOUT } from './constants';

const initialState = {
    loginUser: {} // loginUser era un arreglo, ahora es un objeto (queremos solo 1 loggeado)
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, { loginUser: action.user }); //action.user = req.user de rutas
        case USER_LOGOUT:
            return Object.assign({}, state, { loginUser: action.user }); // action.user = {}
        case "ACTUALIZAR_LOGIN":
            return Object.assign({}, state, { loginUser: action.userActualizado }); //action.user = req.user de rutas
        default:
            return state;
    }
}