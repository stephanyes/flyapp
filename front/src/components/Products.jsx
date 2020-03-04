import React from "react";

export default ({ products }) => {
    return (
        < div >
            <div className="card text-center">
                <div className="card-body">
                    <h1 className="card-title">Experiences</h1>
                    <h4 className="card-text">
                        We give you a lot of special experiences for your enjoy
            </h4>
                </div>
            </div>
            <div className="container">
                <div className="card-columns">
                    {products ?
                        products.map((single) => (
                            <div className="card" key={single.id}>
                                <img
                                    src={single.img_1}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{single.name}</h5>
                                    <p className="card-text">
                                        {single.description}
                                    </p>
                                    <p>Price: {single.price}</p>
                                    <p>Stock: {single.stock}</p>
                                </div>
                            </div>
                        )) : null}
                </div>
            </div>
        </div >
    )
}

// id: 1
// name: "Parachute jump in Dubai"
// description: "Meet Dubai from the sky, and feel the air. Are you ready?"
// img_1: "https://media-cdn.tripadvisor.com/media/photo-s/11/00/a6/f3/every-tandem-skydiving.jpg"
// img_2: ""
// price: 6500
// stock: 20
// createdAt: "2020-03-04T17:07:47.298Z"
// updatedAt: "2020-03-04T17:07:47.298Z"
// categoryId: null