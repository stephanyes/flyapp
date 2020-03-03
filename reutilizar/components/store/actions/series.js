import axios from 'axios';
import { RECEIVE_SERIES, RECEIVE_SERIE } from '../reducers/constants';
const receiveSeries = (series) => ({
    type: RECEIVE_SERIES,
    series,
});

const receiveSerie = (serie) => ({
    type: RECEIVE_SERIE,
    serie,
});

// export const fetchAlbums = () => dispatch =>
//   axios.get('/api/albums')
//     .then(res => res.data)
//     .then(albums => {
//       dispatch(receiveAlbums(albums))
//     });

// export const fetchAlbum = id => dispatch =>
//   axios.get(`/api/albums/${id}`)
//     .then(res => res.data)
//     .then(album => dispatch(receiveAlbum(album)));