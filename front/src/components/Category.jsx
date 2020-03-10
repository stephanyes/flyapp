import React from "react";
import { Link } from "react-router-dom";

export default ({ categorias }) => {

    return (


        <div
            className="card-deck"
            style={{
                backgroundColor: "#ffffff",
                padding: "40px"
            }}
        >
            {categorias
                ? categorias.map(singles => (
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "inherit"
                        }}
                        to={`/category/${singles.id}`}>
                        <div className="card" key={singles.id} >
                            <img src='https://data.whicdn.com/images/240129186/original.jpg' className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="font-weight-bold">{singles.name}</h5>
                            </div>

                        </div>
                    </Link>
                ))
                : null
            }
        </div>
    )
}
