import { RECEIVE_PRODUCTS } from './constants';
const initialState = {
    homeProducts: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, { homeProducts: action.homeProductList })
        default:
            return state;
    }
}