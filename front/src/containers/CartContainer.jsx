import React from "react";

export default () => (
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
          Cart
        </h1>
        <h5 className="font-weight-normal">
          These are your selected experiences
        </h5>
      </div>
    </div>
    <div className="card">
      <div className="card-body">This is some text within a card body.</div>
      <div className="card-body">This is some text within a card body.</div>
      <div className="card-body">This is some text within a card body.</div>
      <div className="card-body">This is some text within a card body.</div>
      <div className="card-body">This is some text within a card body.</div>
    </div>
  </div>
);
