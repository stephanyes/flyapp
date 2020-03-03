import { RECEIVE_FAVORITE, LIMPIAR_ESTA_MIERDA } from './constants';

const initialState = {
    favorito: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Single
        case RECEIVE_FAVORITE:
            return { ...state, favorito: [...state.favorito, action.favoritoAlgo] }
        case LIMPIAR_ESTA_MIERDA:
            return initialState;
        default:
            return state;
    }
}