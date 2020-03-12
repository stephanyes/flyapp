import { GET_COMMENTS } from './constants';

const initialState = {
    comments: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return { ...state, comments: action.commentsDB };
        default:
            return state;
    }
}