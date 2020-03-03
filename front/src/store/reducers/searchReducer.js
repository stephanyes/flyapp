import { RECEIVE_SEARCH, RECEIVE_SEARCHINDIVIDUAL } from './constants';

const initialState = {
    searchMovie: [],
    selectedMovie: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SEARCHINDIVIDUAL:
            return { ...state, selectedMovie: action.movie }
        //Single
        case RECEIVE_SEARCH:
            return { ...state, searchMovie: action.searched }
        default:
            return state;
    }
}