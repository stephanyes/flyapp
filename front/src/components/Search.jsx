import React from "react";
import { Link } from "react-router-dom";

export default props => {
  let products = props.props.state.search_bar.searchBar;
  let input = props.state.inputValue;
  return (
    <div
      style={{
        backgroundColor: "#ffffff"
      }}
    >
      {products &&
      input.length > 1 &&
      props.props.history.location.pathname == "/results" ? (
        <div>
          <div
            className="card text-center"
            style={{
              borderColor: "#ffffff"
            }}
          >
            <div
              className="card-body"
              style={{
                padding: "40px"
              }}
            >
              <h1
                className="font-weight-bold"
                style={{
                  padding: "10px"
                }}
              >
                Results
              </h1>
              <h5 className="font-weight-normal">
                These are the results of your search.
              </h5>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "40px"
            }}
          >
            <div className="card-columns">
              {products &&
              input.length > 1 &&
              props.props.history.location.pathname == "/results"
                ? products.map(single => (
                    <div
                      className="card"
                      style={{
                        marginBottom: "25px",
                        borderStyle: "none",
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                      }}
                      key={single.id}
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "inherit"
                        }}
                        to={`/experience/${single.id}`}
                      >
                        <img
                          src={single.img_1}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="font-weight-bold">{single.name}</h5>
                          <p className="font-weight-normal">
                            {single.description}
                          </p>
                          <p className="font-weight-bold">u$S {single.price}</p>
                        </div>
                      </Link>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
