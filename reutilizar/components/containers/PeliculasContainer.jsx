import React from 'react';
import Peliculas from '../components/Peliculas';
import { connect } from 'react-redux'

class PeliculasContainer extends React.Component {

    render() {
        const { movies } = this.props
        return (
            <div className="container">
                {movies ? <Peliculas movies={this.props.movies} /> : null}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.search.searchMovie.Search
    }
}



export default connect(mapStateToProps)(PeliculasContainer)