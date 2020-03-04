//Aca levantamos todos lo0s reducers
import { combineReducers } from 'redux';
import loginReducer from './loginReducer'


export default combineReducers({
    userLogin: loginReducer
});