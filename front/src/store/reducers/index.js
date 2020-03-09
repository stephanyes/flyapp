//Aca levantamos todos lo0s reducers
import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import productsReducer from './productsReducer'
import searchReducer from './searchReducer';
import homeReducer from './homeReducer';
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer'

export default combineReducers({
    userLogin: loginReducer,
    register: registerReducer,
    productList: productsReducer,
    search_bar: searchReducer,
    home: homeReducer,
    cart: cartReducer,
    category: categoryReducer
});