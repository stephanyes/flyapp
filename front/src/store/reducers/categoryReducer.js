import { GET_CATEGORY, GET_CATEGORYID } from './constants';

const initialState = {
    category: [],
    selectedProducts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Single
        case GET_CATEGORY:
            return { ...state, category: action.categories };
        case GET_CATEGORYID:
            return { ...state, selectedProducts: action.productCategories };
        default:
            return state;
    }
}