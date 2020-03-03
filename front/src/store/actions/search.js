import axios from 'axios';
import { RECEIVE_SEARCH, RECEIVE_SEARCHINDIVIDUAL } from '../reducers/constants';

const receiveSearchMovie = (searched) => ({
    type: RECEIVE_SEARCH,
    searched,
});

const individualMovie = (movie) => ({
    type: RECEIVE_SEARCHINDIVIDUAL,
    movie
})


export const searchedMovie = (searchedMovie) => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${searchedMovie}`)
        .then(movies => movies.data)
        .then(movies => { dispatch(receiveSearchMovie(movies)) })

export const individual = id => dispatch =>
    axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${id}`)
        .then(movie => movie.data)
        .then(movie => { dispatch(individualMovie(movie.Search)) })