import axios from 'axios';
import { USER_LOGIN, USER_LOGOUT } from '../reducers/constants';

const userLogin = (user) => ({
    type: USER_LOGIN,
    user,
});

const userLogout = () => ({
    type: USER_LOGOUT,
    user: {}
});

export const login = (user) => dispatch =>
    axios.post(`/auth/login`, { email: user.email, password: user.password })
        .then(userLogeado => {
            return dispatch(userLogin(userLogeado.data))
        })

export const logout = () => dispatch =>
    axios.post(`/auth/logout`)
        .then(() => dispatch(userLogout()))


export const mantenermeLogueado = () => dispatch =>
    axios.get("http://localhost:3000/auth/user")
        .then(res => {
            return dispatch(userLogin(res.data))
        })