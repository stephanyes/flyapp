//Aca levantamos todos lo0s reducers
import { combineReducers } from 'redux';
import registerReducer from './registerReducer'


export default combineReducers({
    register: registerReducer
});