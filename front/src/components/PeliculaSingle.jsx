import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    return (

        <div className="card mb-3" style="max-width: 540px;">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.movie.selectedMovie.Poster} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.selectedMovie.Title}</h5>
                        <p className="card-text">{props.movie.selectedMovie.Plot}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <button type="button" onClick={() => props.submit(props.movie.selectedMovie.imdbID)} className="btn btn-success">Favorite</button>
                </div>
            </div>
        </div>
    )
}



