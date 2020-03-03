import React from 'react';
import Home from '../components/Home';
import { fetchRandoms } from '../store/actions/home'
import { connect } from 'react-redux'



class HomeContainer extends React.Component {

    preventReRender() {
        if (!this.props.randoms[0]) {
            this.props.rands()
        }
    }

    componentDidMount() {
        this.preventReRender()
    }


    render() {

        return (
            <Home peliculas={this.props.randoms} />
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        randoms: state.random.randoms
    })
}

const mapDispatchToProps = (dispatch, state) => {
    return {
        rands: () => dispatch(fetchRandoms())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)