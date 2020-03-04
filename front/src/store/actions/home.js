import axios from 'axios';
import { RECEIVE_PRODUCTS } from '../reducers/constants';
const listaProductos = (homeProductList) => ({
    type: RECEIVE_PRODUCTS,
    homeProductList,
});
export const fetchHomeProducts = () => dispatch =>
    axios.get(`/products/all`)
        .then(res => res.data)
        .then(productoRecibido => dispatch(listaProductos(productoRecibido)))