import axios from 'axios';
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../reducers/constants';

const listaProductos = (productList) => ({
    type: RECEIVE_PRODUCTS,
    productList,
});

const elegirProducto = (selectedProduct) => ({
    type: RECEIVE_PRODUCT,
    selectedProduct,
})

export const fetchProducts = () => dispatch =>
    axios.get(`/products/all`)
        .then(res => res.data)
        .then(productoRecibido => dispatch(listaProductos(productoRecibido)))

export const fetchSingleProduct = (id) => dispatch =>
    axios.get(`/products/${id}`)
        .then(res => res.data)
        .then(producto => dispatch(elegirProducto(producto)))
