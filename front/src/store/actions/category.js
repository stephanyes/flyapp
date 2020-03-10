
import { GET_CATEGORY, GET_CATEGORYID } from '../reducers/constants'
import Axios from 'axios';

const addCategory = (categories) => ({
    type: GET_CATEGORY,
    categories,
});

const addCategoryId = (productCategories) => ({
    type: GET_CATEGORYID,
    productCategories,
});


export const getCategory = () => dispatch =>
    Axios.get('/categories')
        .then(res => res.data)
        .then(found => dispatch(addCategory(found)))



export const getCategoryById = (id) => dispatch =>
    Axios.get(`/categories/${id}`)
        .then(res => res.data)
        .then(found => dispatch(addCategoryId(found)))