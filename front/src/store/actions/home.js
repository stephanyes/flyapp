import axios from 'axios';
import { GET_RANDOMS } from '../reducers/constants';

const receiveRandoms = (movies) => ({
    type: GET_RANDOMS,
    movies,
});

const movies = [
    'Die Hard',
    'The Transporter',
    'The Dark Knight',
    'The Bourne Identity',
    'James Bond: Casino Royale',
    'Suicide Squad',
    'Hancock',
    'The Terminator',
    "Predator",
    'Indiana Jones',
    "Gladiator",
    'Tomb Raider',
    'Lethal Weapon',
    "Superbad",
    'The Other Guys',
    "28 Days Later",
    "The Texas Chain Saw Massacre",
    "Inception",
    "The Departed",
    "Heat",
    "The Dark Knight Rises",
    "Léon: The Professional",
    "The Bourne Ultimatum",
    "Black Swan",
    "No Country for Old Men",
    "Run Lola Run",
    "Se7en",
    "Sin City",
    "The Silence of the Lambs",
    "Minority Report"
]

export const fetchRandoms = () => dispatch => {
    for (let i = 0; i < movies.length; i++) {
        axios.get(`https://www.omdbapi.com/?apikey=20dac387&t=${movies[i]}`)
            .then(movies => movies.data)
            .then(movie => {
                dispatch(receiveRandoms(movie))
            })
    }
}
