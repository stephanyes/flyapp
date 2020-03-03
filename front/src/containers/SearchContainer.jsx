import React from 'react';
import { connect } from 'react-redux'
import { searchedMovie } from '../store/actions/search'
import { logout } from '../store/actions/login'
import Peliculas from '../components/Peliculas'
import { Link } from 'react-router-dom';


class SearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleChange(evt) {
        const value = evt.target.value
        this.setState({
            inputValue: value
        })
    }
    handleSubmit() {
        this.props.traerSearch(this.state.inputValue)
    }

    handleLogout() {
        this.props.chau()
    }


    render() {
        return (
            <div className='form-group'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">OMDB</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/home">
                                    {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                                    <p className="nav-link">Home</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/favorites">
                                    {/* <a className="nav-link" href="#">Favorites <span className="sr-only">(current)</span></a> */}
                                    <p className="nav-link">Favorites</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/register">
                                    {/* <a className="nav-link" href="#">Favorites <span className="sr-only">(current)</span></a> */}
                                    <p className="nav-link">Register</p>
                                </Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
                            <Link to="/search">
                                <button onClick={this.handleSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </Link>
                            <Link to="/login">
                                <button onClick={this.handleLogout} className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button>
                            </Link>
                        </form>
                    </div>
                </nav>

            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        userLogged: state.userLogged.loginUser
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return {
        traerSearch: (searched) => dispatch(searchedMovie(searched)),
        chau: () => dispatch(logout())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

                // <form onSubmit={(e) => this.handleSubmit(e)}>
                //     <input
                //         type="text"
                //         onChange={this.handleChange}
                //         className="form-control"
                //     />
                //     <button className="btn btn-primary">SEARCH</button>
                // </form>