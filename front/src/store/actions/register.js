import axios from 'axios';
import { CREATE_USER } from '../reducers/constants';

const createUser = (user) => ({
    type: CREATE_USER,
    user,
});

export const fetchUserModel = (user) => dispatch =>
    axios.post(`/auth/register`, user)


