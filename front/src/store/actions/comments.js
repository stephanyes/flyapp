import { GET_COMMENTS } from '../reducers/constants'
import Axios from 'axios';

const addComments = (commentsDB) => ({
    type: GET_COMMENTS,
    commentsDB,
});


export const fetchComments = () => dispatch =>
    Axios.get(`/review/getAll`)
        .then(res => res.data)
        .then(comments => dispatch(addComments(comments)))
