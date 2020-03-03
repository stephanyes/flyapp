import { GET_RANDOMS } from './constants';

const initialState = {
    randoms: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Single
        case GET_RANDOMS:
            return { ...state, randoms: [...state.randoms, action.movies] }
        default:
            return state;
    }
}