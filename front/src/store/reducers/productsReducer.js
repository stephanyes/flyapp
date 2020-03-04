import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../reducers/constants';

const initialState = {
    products: [],
    selectedProduct: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, { products: action.productList });
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, { selectedProduct: action.selectedProduct });
        default:
            return state;
    }
}