import { GET_CATEGORY, GET_CATEGORYID, FIND_CATEGORY } from './constants';

const initialState = {
    category: [],
    selectedProducts: [],
    selectedCategory: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Single
        case GET_CATEGORY:
            return { ...state, category: action.categories };
        case GET_CATEGORYID:
            return { ...state, selectedProducts: action.productCategories };
        case FIND_CATEGORY:
            return Object.assign({}, state, { selectedCategory: action.category }); //action.user = req.user de rutas

        default:
            return state;
    }
}