//Aca va todal la logica de los reducers
import { combineReducers } from 'redux';
import peliculasReducer from './peliculasReducer';
import seriesReducer from './seriesReducer';
import searchReducer from './searchReducer';
import favoritosReducer from './favoritosReducer';
import usersReducer from './usersReducer';
import loginReducer from './loginReducer';
import homeReducer from './homeReducer';


export default combineReducers({
    movies: peliculasReducer,
    series: seriesReducer,
    search: searchReducer,
    favorito: favoritosReducer,
    user: usersReducer,
    userLogged: loginReducer,
    random: homeReducer
});