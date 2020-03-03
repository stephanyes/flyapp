import React from 'react';
import { Link } from 'react-router-dom';


export default ({ favoritos }) => {
    console.log(favoritos[0]);

    return (
        <div className='container'>
            <h3>Favourites</h3>
            <hr />
            <div className='row'>
                {favoritos[0].map((movie, index) => (
                    <div key={index} className='img-thumbnail col-xs-3' style={{ width: "250px", height: '400px', margin: '15px' }}>
                        <Link to={`/movies/${movie.imdbID}`}  >
                            <img src={movie.Poster} alt="img-movie" style={{ width: "220px", height: '320px' }}
                            />
                        </Link>
                        <div>
                            <h5>{movie.Title}</h5>
                            <small >{movie.Year}</small>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

