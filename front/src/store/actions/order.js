import { GET_DRAFTS, GET_CONFIRMED, GET_CANCELLED, GET_FULFILLED, SET_ORDERSELECTED } from '../reducers/constants'
import Axios from 'axios';

const addDraft = (orders) => ({
    type: GET_DRAFTS,
    orders,
});

const addConfirmed = (orders) => ({
    type: GET_CONFIRMED,
    orders,
});

const addCancelled = (orders) => ({
    type: GET_CANCELLED,
    orders,
});

const addFulfilled = (orders) => ({
    type: GET_FULFILLED,
    orders,
});

const setOrdersSelected = (order) => ({
    type: SET_ORDERSELECTED,
    order,
})

export const getDrafts = () => dispatch =>
    Axios.get(`/order/draft`)
        .then(res => res.data)
        .then(found => dispatch(addDraft(found)))

export const getConfirmed = () => dispatch =>
    Axios.get(`/order/confirmed`)
        .then(res => res.data)
        .then(found => dispatch(addConfirmed(found)))

export const getCancelled = () => dispatch =>
    Axios.get(`/order/cancelled`)
        .then(res => res.data)
        .then(found => dispatch(addCancelled(found)))

export const getFulfilled = () => dispatch =>
    Axios.get(`/order/fulfilled`)
        .then(res => res.data)
        .then(found => dispatch(addFulfilled(found)))

export const setOrder = (order) => dispatch =>
    dispatch(setOrdersSelected(order))       
