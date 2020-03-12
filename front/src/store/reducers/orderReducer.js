import { GET_DRAFTS, GET_CONFIRMED, GET_CANCELLED, GET_FULFILLED, SET_ORDERSELECTED } from './constants';

const initialState = {
    draft: [],
    confirmed: [],
    cancelled: [],
    fulfilled: [],
    selected: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DRAFTS:
            return { ...state, draft: action.orders };
        case GET_CONFIRMED:
            return { ...state, confirmed: action.orders };
        case GET_CANCELLED:
            return { ...state, cancelled: action.orders };
        case GET_FULFILLED:
            return { ...state, fulfilled: action.orders };
        case SET_ORDERSELECTED:
            return { ...state, selected: action.order };
        default:
            return state;
    }
}