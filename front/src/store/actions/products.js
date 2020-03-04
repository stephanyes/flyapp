import axios from 'axios';
import { RECEIVE_PRODUCTS } from '../reducers/constants';

const listaProductos = (productList) => ({
    type: RECEIVE_PRODUCTS,
    productList,
});



export const fetchProducts = () => dispatch =>
    axios.get(`/products/all`)
        .then(res => res.data)
        .then(productoRecibido => dispatch(listaProductos(productoRecibido)))
