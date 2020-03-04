import axios from 'axios';
import { RECEIVE_SEARCHBAR } from '../reducers/constants';

const search_bar = (search) => ({
    type: RECEIVE_SEARCHBAR,
    search,
});



export const fetchSearchBar = (search) => dispatch =>
    axios.post("/products/searchBar" , {search} )
    // .then(()=>{axios.get("/products/searchBar")})
    
    //     .then(res => res.data)
        .then(searchRecibido => dispatch(search_bar(searchRecibido.data)))
