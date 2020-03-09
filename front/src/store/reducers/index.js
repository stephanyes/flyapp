//Aca levantamos todos los reducers
import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import productsReducer from './productsReducer'
import searchReducer from './searchReducer';
import homeReducer from './homeReducer';
import editUsersReducer from './editUsersReducer'
import cartReducer from './cartReducer';

export default combineReducers({
  userLogin: loginReducer,
  register: registerReducer,
  productList: productsReducer,
  search_bar: searchReducer,
  home: homeReducer,
  userEdit: editUsersReducer,
  cart: cartReducer
});