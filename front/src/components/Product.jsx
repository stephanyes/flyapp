import React from "react";

export default ({ producto }) => {
  return (
    <div>
      <div className="row aling-items-center">
        <div className="col">
          <div className="jumbotron">
            <h4>****</h4>
            <h1 className="display-4">{producto.name}</h1>

            <p className="lead">{producto.description} </p>
            <h5>{`U$D ${producto.price}`}</h5>
            <h6>{`Stock: ${producto.stock}`}</h6>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Add to Cart
            </a>
          </div>
        </div>

        <div className="col">
          <img src={producto.img_1} class="img-fluid" alt="Responsive image" />
        </div>
      </div>
    </div>
  );
};
