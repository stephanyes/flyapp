import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';


export default (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {props.moviesSearch.searchMovie.map((peli, index) => {
                    if (peli.Type === "movie") {
                        return (
                            <div key={index} className="col-4">
                                <Link to={`/movies/${peli.imdbID}`}>
                                    <img src={peli.Poster} />
                                </Link>
                                <div className="caption">
                                    <h5>
                                        <p>{peli.Title}</p>
                                        <p>{peli.Year}</p>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
