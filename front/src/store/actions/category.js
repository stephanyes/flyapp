
import { GET_CATEGORY, GET_CATEGORYID, FIND_CATEGORY } from '../reducers/constants'
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


//acciones necesarias para el new/edit category

const selectCategory = (category) => ({
    type: FIND_CATEGORY,
    category
})

//Seleccionar 1 sola categoria
export const fetchCategory = id => dispatch =>
    Axios.get(`/categories/category/${id}`)
        .then(res => res.data)
        .then(category => dispatch(selectCategory(category)))

export const createCategory = body => dispatch =>
    Axios.post(`/categories`, body)

export const deleteCategory = id => dispatch =>
    Axios.delete(`/categories/${id}`).then(() => dispatch(getCategory()))

export const editCategory = (id, category) => dispatch =>
    Axios.put(`/categories/${id}`, category).then(() => dispatch(getCategory()))