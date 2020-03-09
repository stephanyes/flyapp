import { RECEIVE_USERS } from './constants';
const initialState = {
    userList: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, state, { userList: action.userList });
        default:
            return state;
    }
}