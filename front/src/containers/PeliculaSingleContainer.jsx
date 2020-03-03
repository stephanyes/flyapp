import React from 'react';
import PeliculasSingle from '../components/PeliculaSingle';
import { fetchMovie, fetchFavs } from '../store/actions/peliculas'
import { lavajato2 } from '../store/actions/peliculas'
import { saveFavToDB } from '../store/actions/favoritos'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class PeliculasSingleContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: {}
        }
    }
    componentDidMount() {
        //Fetchear el id de pelicula
        this.props.traerUnaMovie(this.props.match.params.movieId)
        this.props.favoritosParaEliminar()
    }

    componentWillUnmount() {
        this.props.lavar();
    }



    render() {
        return (
            // <PeliculasSingle movie={this.props.movie} submit={this.handleSubmit} favorito={this.props.favorito} />
            < div className="card mx-auto" style={{ maxWidth: "1500px" }} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={this.props.movie.selectedMovie.Poster} className="card-img" alt="..." />
                    </div>
                    <div className="col" style={{ alignContent: "center" }}>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.movie.selectedMovie.Title}</h5>
                            <p className="card-text">{this.props.movie.selectedMovie.Plot}</p>
                            <p className="card-text text-muted" >Year: {this.props.movie.selectedMovie.Year}</p>
                        </div>
                        <Link to="/home" style={{ paddingLeft: "20px" }}>
                            <button type="button" onClick={() => this.props.saveToDB(this.props.movie.selectedMovie)} className="btn btn-success">Favorite</button>
                        </Link>
                    </div>
                </div>
            </div >
        )

    }
}
const mapStateToProps = (state) => {
    return ({
        movie: state.movies,
        selected: state.movies.selectedMovie,
        favorito: state.favorito,
        usuario: state.userLogged.loginUser
    })
}

const mapDispatchToProps = (dispatch, state) => {
    return {
        traerUnaMovie: (id) => dispatch(fetchMovie(id)),
        saveToDB: (pelicula) => dispatch(saveFavToDB(pelicula)),
        favoritosParaEliminar: () => dispatch(fetchFavs()),
        lavar: () => dispatch(lavajato2())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeliculasSingleContainer)