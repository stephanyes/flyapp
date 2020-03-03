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
    axios.post(`/auth/login`, { username: user.username, password: user.password })
        .then(userLogeado => dispatch(userLogin(userLogeado.data)))

export const logout = () => dispatch =>
    axios.get(`/auth/logout`)
        .then(() => dispatch(userLogout()))