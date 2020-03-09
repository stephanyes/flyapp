import { FILL_CART } from '../reducers/constants';
import { REMOVE_PRODUCT } from '../reducers/constants'

const addProduct = (product) => ({
    type: FILL_CART,
    product,
});

const deleteProduct = (newCart) => ({
    type: REMOVE_PRODUCT,
    newCart
})


export const fillCart = (product) => dispatch =>
    dispatch(addProduct(product))
 
export const removeProduct = (newCart) => dispatch =>
    
    dispatch(deleteProduct(newCart))    