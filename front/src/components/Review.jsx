import React from "react";
import { Link } from "react-router-dom";

export default () =>

    (
        <div
            style={{
                backgroundColor: "#fff"
            }}
        >
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
                        Review
        </h1>
                    <h5
                        className="font-weight-normal"
                        style={{
                            marginBottom: "20px"
                        }}
                    >
                        Leave a comment!
        </h5>
                </div>

            </div>

        </div>
    );
