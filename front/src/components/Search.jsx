import React from "react";

export default props => {
  let products = props.props.state.search_bar.searchBar;
  let input = props.state.inputValue;
  return (
    <div>
      {input ? (
        <div className="container">
          <div className="card-columns">
            {products && input.length > 1
              ? products.map(single => (
                  <div className="card" key={single.id}>
                    <img
                      src={single.img_1}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{single.name}</h5>
                      <p className="card-text">{single.description}</p>
                      <p>Price: {single.price}</p>
                      <p>Stock: {single.stock}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};
