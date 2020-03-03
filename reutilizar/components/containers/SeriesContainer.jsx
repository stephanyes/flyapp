import React from 'react';
import Series from '../components/Series';
import { connect } from 'react-redux'
import store from '../store/index'

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch, state) => {

}


class SeriesContainer extends React.Component {
    componentDidMount() {
        //Fetchear peliculas
    }
    render() {
        return (
            <Series />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesContainer)