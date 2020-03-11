import { GET_ORDERS } from '../reducers/constants'
import Axios from 'axios';

const addOrders = (orders) => ({
    type: GET_ORDERS,
    orders,
});

export const getOrders = () => dispatch =>
    Axios.get(`/order/history`)
        .then(res => res.data)
        .then(found => dispatch(addOrders(found)))