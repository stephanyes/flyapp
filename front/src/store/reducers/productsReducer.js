import { RECEIVE_PRODUCTS } from './constants';

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, { products: action.productList })
        default:
            return state;
    }
}