import { GET_ORDERS } from './constants';

const initialState = {
    ordersState: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return { ...state, ordersState: action.orders };
        default:
            return state;
    }
}