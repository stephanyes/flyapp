import { RECEIVE_SEARCHBAR } from './constants';

const initialState = {
    searchBar: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_SEARCHBAR:
            return Object.assign({}, state, { searchBar: action.search })
        default:
            return state;
    }
}