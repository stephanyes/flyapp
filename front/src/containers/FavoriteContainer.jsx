import React from 'react';
// import { fetchMovie } from '../store/actions/peliculas'
import { saveFavorite, lavajato } from '../store/actions/favoritos'
import { connect } from 'react-redux'
//import FavoriteList from '../components/FavoriteList'
import { Link } from 'react-router-dom';

class FavoriteContainer extends React.Component {

    componentDidMount() {
        //Fetchear el id de pelicula
        console.log("ENTRASTE DIRECOT A FAVOS");
        this.props.saveFavorito()
    }

    componentWillUnmount() {
        this.props.lavar();
    }

    render() {
        console.log(this.props.favorito);
        return (
            <div>
                <div className='container'>
                    <hr />
                    <h3>Favorites Movies</h3>
                    <div className='row'>
                        {this.props.favorito.map((peli, i) => (
                            <Link
                                to={`/movies/${peli.imdbID}`}
                                key={i}
                                className='col-xs-4' >
                                <div
                                    className='img-thumbnail'
                                    style={{ width: "250px", height: '400px', margin: '15px' }}
                                >
                                    <img
                                        src={peli.Poster}
                                        alt="img-peli"
                                        style={{ width: "220px", height: '320px' }}
                                    />
                                    <div>
                                        <h5 >{peli.Title}</h5>
                                        <small >{peli.Year}</small>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>)
    }
}
const mapStateToProps = (state) => {
    return ({
        favorito: state.favorito.favorito,
        userLogged: state.userLogged.loginUser[0]
    })
}

const mapDispatchToProps = (dispatch, state) => {
    return {
        traerUnaMovie: (id) => dispatch(fetchMovie(id)),
        saveFavorito: () => dispatch(saveFavorite()),
        lavar: () => dispatch(lavajato())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer)