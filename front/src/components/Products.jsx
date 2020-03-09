import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default ({ products, handleClick }) => {
  
  // numberOfPages se encarga del numero de paginas y setNumberOfPages modifica el numero de paginas
  const [numberOfPages, setNumberOfPages] = useState([]);
  //currentPage se encarga de decidir en que pagina estas por deafult empieza en 1
  // y el setCurrentPage de modificar el numero de la pagina en la que estàs
  const [currentPage, setCurrentPage] = useState(1);
  //currentContent dependiendo de la pagina en la que estès se encarga de mostrar
  // el contenido dependiendo de la cantidad de producto que quieras estar
  //setCurrentContent setea el valor de lo que se va a mostrar
  const [currentContent, setCurrentContent] = useState([]);
  // es el componentdidUpdate de los hooks, se encarga de verificar que cosas cambian para hacer re-render a traves
  //de su segundo paramentro que siempre por default tiene que ser un arreglo vacio si no tienes nada especifico que cambiar
   
  
  products ?
  useEffect(() => {
    //se encarga de ver si los productos existen y si existen lo que hace es generar un array con la cantidad de paginas
    //dependiendo de la cantidad de productos que queremos mostrar, y ese es el numero despues de la division
    //ejemplo: setNumberOfPages(Array.from(Array(25 / 5).keys()));
    //ahi seria igual a 5 paginas
    
    if (products.length) {
      setNumberOfPages(Array.from(Array(products.length / 6).keys()));
    }

    switch (currentPage) {
      case 1:
        setCurrentContent(products.slice(0, 6));
        break;
      case 2:
        setCurrentContent(products.slice(6, 12));
        break;
      case 3:
        setCurrentContent(products.slice(12, 18));
        break;
      default:
        break;
    }
  }, [products.length, currentPage])
  : 
  useEffect(() => {
    //esto es para que si no le llegan los productos q se hace de manera async no haga nada, despues cuando les llegue entra al useEffect de arriba
  },[products, currentPage])
  
  //La razon por la que està el products.length y el currentPage es porque queremos saber si alguna de esas 2 cosas cambian
  //para hacer re-render
  const pagination = numberOfPages =>
    numberOfPages.map((page, key) => {
      return (
        <div key={`${key + page}`}>
          <li class="page-item" onClick={() => setCurrentPage(key + 1)}>
            <a
              class="page-link"
              href="#"
              style={{ color: "white", backgroundColor: "  #2EC4B6" }}
            >
              {key + 1}
            </a>
          </li>
        </div>
      );
    })
    
  return (
    <div className="">
      {products ? (
        <div className="">
          <div
      style={{
        backgroundColor: "#ffffff"
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
            Experiences
          </h1>
          <h5 className="font-weight-normal">
            We give you a lot of special experiences for your enjoy!
          </h5>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {currentContent
            ? currentContent.map(single => (
                <div
                  className="card"
                  style={{
                    marginBottom: "25px",
                    width: "30%",
                    margin: 10,
                    height: "50%"
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
                      <p className="font-weight-normal">{single.description}</p>
                      <p className="font-weight-bold">u$S {single.price}</p>
                    </div>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>
      {/* pagination */}
      <nav aria-label="Page navigation example">
        <ul
          class="pagination"
          style={{
            flex: "display",
            justifyContent: "center"
          }}
        >
          {/* funciona para la flecha de pagination pueda ir hacia atrás */}
          <li
            class="page-item"
            onClick={() => {
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
          >
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              style={{ color: "white", backgroundColor: "#2EC4B6" }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {/* la funcion pagination se encarga de iterar por el numero de paginas para saber cuantas tengo */}
          {products.length > 1 ? pagination(numberOfPages) : "no  hay pages"}

          {/* funciona para la flecha de pagination pueda ir hacia adelante */}
          <li
            class="page-item "
            onClick={() => {
              if (currentPage < numberOfPages.length)
                setCurrentPage(currentPage + 1);
            }}
          >
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              style={{ color: "white", backgroundColor: "#2EC4B6" }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
        </div>
      ):(null)}
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
