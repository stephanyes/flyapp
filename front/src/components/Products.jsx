import React from "react";
import { Link } from "react-router-dom";

// export default ({ products }) => {
//   return (
//     <div>
//       <div
//         className="card text-center"
//         style={{
//           borderColor: "#ffffff"
//         }}
//       >
//         <div
//           className="card-body"
//           style={{
//             padding: "40px"
//           }}
//         >
//           <h1
//             className="font-weight-bold"
//             style={{
//               padding: "10px"
//             }}
//           >
//             Experiences
//           </h1>
//           <h5 className="font-weight-normal">
//             We give you a lot of special experiences for your enjoy
//           </h5>
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "#ffffff",
//           padding: "40px"
//         }}
//       >
//         <div className="card-columns">
//           {products
//             ? products.map(single => (
//                 <div
//                   className="card"
//                   style={{
//                     marginBottom: "25px"
//                   }}
//                   key={single.id}
//                 >
//                   <img src={single.img_1} className="card-img-top" alt="..." />

export default ({ products, handleClick }) => {
  return (
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
            Experiences
          </h1>
          <h5 className="font-weight-normal">
            We give you a lot of special experiences for your enjoy
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
          {products
            ? products.map(single => (
                <div
                  className="card"
                  style={{
                    marginBottom: "25px"
                  }}
                  key={single.id}
                >
                  <Link to={`/experience/${single.id}`}>
                    <img
                      src={single.img_1}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
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
    </div>
  );
};

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
