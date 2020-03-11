import axios from 'axios';
import { RECEIVE_USERS } from '../reducers/constants';

const listaUsers = (userList) => ({
    type: RECEIVE_USERS,
    userList,
});

export const fetchUserList = () => dispatch =>
    axios.get(`/auth/userList`)
        .then(res => res.data)
        .then(userList => dispatch(listaUsers(userList)))

export const deleteUser = (id) => dispatch => axios.delete(`/auth/delete/${id}`)
    .then(() => dispatch(fetchUserList()))

export const promoteUser = (id) => dispatch => axios.put(`/auth/changeRole/${id}`, { rol_id: 'admin' })
    .then(() => dispatch(fetchUserList()))

export const demoteUser = (id) => dispatch => axios.put(`/auth/changeRole/${id}`, { rol_id: 'client' })
    .then(() => dispatch(fetchUserList()))