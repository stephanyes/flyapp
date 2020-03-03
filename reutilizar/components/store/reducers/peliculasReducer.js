import { RECEIVE_MOVIES, RECEIVE_MOVIE, RECEIVE_FAVORITE, LIMPIAR_ESTA_MIERDA } from './constants';

const initialState = {
  movies: [],
  selectedMovie: {},
  favorito: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    //Single
    case RECEIVE_MOVIE:
      return Object.assign({}, state, { selectedMovie: action.movie });
    //Varias
    case RECEIVE_MOVIES:
      return Object.assign({}, state, { movies: action.movies });
    //favoritos
    case RECEIVE_FAVORITE:
      return { ...state, favorito: [...state.favorito, action.favoritos] }
    case LIMPIAR_ESTA_MIERDA:
      return initialState
    default:
      return state;
  }
}