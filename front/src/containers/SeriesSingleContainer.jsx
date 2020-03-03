import React from 'react';
import SeriesSingle from '../components/SeriesSingle';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch, state) => {

}


class SeriesSingleContainer extends React.Component {
    componentDidMount() {
        //Fetchear el id de pelicula
    }
    render() {
        return (
            <PeliculasSingle />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesSingleContainer)