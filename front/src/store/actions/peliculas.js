import axios from 'axios';
import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_FAVORITE, LIMPIAR_ESTA_MIERDA } from '../reducers/constants';

const receiveMovies = (movies) => ({
    type: RECEIVE_MOVIES,
    movies,
});

const receiveMovie = (movie) => ({
    type: RECEIVE_MOVIE,
    movie,
});

const traerFavs = (favoritos) => ({
    type: RECEIVE_FAVORITE,
    favoritos
})

const limpiarFavos2 = () => ({
    type: LIMPIAR_ESTA_MIERDA
});

export const fetchMovies = (searchedMovie) => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${searchedMovie}`)
        .then(movies => movies.data)
        .then(movies => { dispatch(receiveMovies(movies.Search)) })

export const fetchMovie = id => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
        .then(res => res.data)
        .then(movie => dispatch(receiveMovie(movie)));

export const fetchFavs = () => dispatch =>
    axios.get('/auth/tabla')
        .then(res => res.data)
        .then(movie => movie.map(algo => {
            dispatch(traerFavs(algo))
        }))


export const lavajato2 = () => dispatch =>
    dispatch(limpiarFavos2())

