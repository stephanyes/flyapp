import axios from 'axios';
import { RECEIVE_FAVORITE, LIMPIAR_ESTA_MIERDA } from '../reducers/constants';

const receiveFavorite = (favoritoAlgo) => ({
    type: RECEIVE_FAVORITE,
    favoritoAlgo,
});
const limpiarFavos = () => ({
    type: LIMPIAR_ESTA_MIERDA
});

//Grabo la pelicula entera con el USER ID en la base de datos y lo agrego al estado
export const saveFavToDB = (fav) => dispatch =>
    axios.post(`/auth/addFav`, { fav })
        .then(algo => algo.data)
        .then(movie => dispatch(receiveFavorite(movie)));

export const saveFavorite = () => dispatch =>
    axios.get(`/auth/tabla`)
        .then(res => res.data)
        .then(movie => movie.map(algo => {
            dispatch(receiveFavorite(algo))
        }))

export const lavajato = () => dispatch =>
    dispatch(limpiarFavos())