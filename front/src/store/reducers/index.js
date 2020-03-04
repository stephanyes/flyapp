//Aca levantamos todos lo0s reducers
import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'


export default combineReducers({
    userLogin: loginReducer,
    register: registerReducer
});