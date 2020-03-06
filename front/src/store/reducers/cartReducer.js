import { FILL_CART, REMOVE_PRODUCT } from './constants';
const initialState = {
    cart: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FILL_CART:
    return { ...state, cart: [...state.cart, action.product] };
        case REMOVE_PRODUCT:
    return  Object.assign({}, state, { cart: action.newCart })        
        default:
            return state;
    }
}

