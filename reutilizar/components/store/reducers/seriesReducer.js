import { RECEIVE_SERIES, RECEIVE_SERIE } from './constants';
const initialState = {
    series: [],
    selectedSerie: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        //Single
        case RECEIVE_SERIE:
            return Object.assign({}, state, { selectedSerie: action.serie });
        //Varias
        case RECEIVE_SERIES:
            return Object.assign({}, state, { series: action.series });
        default:
            return state;
    }
}