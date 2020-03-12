import React from "react";
import { Link } from "react-router-dom";

export default ({user,handleClick, order}) => {
let suma = 0
if (order.cart){
    order.cart.products.map(ele=>{
        suma = suma + ele.price
    })
}

  return (
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
            Pay your order
          </h1>
          <h5 className="font-weight-normal">
            #{order.id}
          </h5>
        </div>
      </div>

       <div>
      {(order.cart ? order.cart.products : []).map(algo => (
          <div key={algo.id}> 
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-2">
                  <img src={algo.img_1} className="card-img" alt="..." />
                </div>
                 <div className="col-md-10">
                  <div className="card-body">
                    <h5 className="font-weight-bold">{algo.name}</h5>
                    <p className="font-weight-normal">{algo.description}</p>
                    <p className="font-weight-bold">u$S {algo.price} </p>
                  </div>
                 </div>
              </div>
            </div>
          </div>
                ))}
                </div>
                  
        <div className=""> Total = u${suma}
         </div>

      <form
        style={{
          padding: "40px",
          marginLeft: "20px"
        }}
      >
        <h2
          className="font-weight-bold"
          style={{
            paddingBottom: "20px"
          }}
        >
          Delivery Adress
        </h2>
        <div className="form-group">
          <label for="inputAddress">Address</label>
          <input
            //  onChange={handleAddress1}
            name="address1"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder={user.address1}
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            //   onChange={handleAddress2}
            name="address2"
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder={user.address2}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label for="inputCity">City</label>
            <input
              //   onChange={handleAddress3}
              name="address3"
              type="text"
              className="form-control"
              id="inputCity"
              placeholder={user.address3}
            />
          </div>

          <div
            className="form-group col-md-4"
            style={{
              paddingBottom: "20px"
            }}
          >
            <label for="inputZip">Zip</label>
            <input
              //   onChange={handlePostCode}
              name="postCode"
              type="text"
              className="form-control"
              id="inputZip"
              placeholder={user.postCode}
            />
          </div>
        </div>
        <button
          //onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "#2EC4B6",
            borderColor: "#2EC4B6"
          }}
        >
          Set new Address
        </button>
      </form>
      <form
        style={{
          padding: "40px",
          marginLeft: "20px"
        }}
      >
        <h2
          className="font-weight-bold"
          style={{
            paddingBottom: "20px"
          }}
        >
          Payment Method
        </h2>
        <div className="form-group">
          <label for="inputCardHolder">Cardholder</label>
          <input
            //  onChange={handleAddress1}
            name="cardHolder"
            type="text"
            className="form-control"
            id="inputCardHolder"
            placeholder="John Doe"
          />
        </div>
        <div className="form-group">
          <label for="inputnumberCard">Number of Card</label>
          <input
            //   onChange={handleAddress2}
            name="numberCard"
            type="number"
            className="form-control"
            id="inputnumberCard"
            placeholder="4362 - XXXX - XXXX - XXX"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label for="inputExpirationDate">Expirate Date</label>
            <input
              //   onChange={handleAddress3}
              name="expirationDate"
              type="number"
              className="form-control"
              id="inputExpirationDate"
              placeholder="MM / YY"
            />
          </div>

          <div
            className="form-group col-md-4"
            style={{
              paddingBottom: "20px"
            }}
          >
            <label for="inputCode">Code</label>
            <input
              //   onChange={handlePostCode}
              name="code"
              type="number"
              className="form-control"
              id="inputCode"
            />
          </div>
        </div>
        <button
          //onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "#2EC4B6",
            borderColor: "#2EC4B6"
          }}
        >
          Set Payment Method
        </button>
      </form>

      <div
        class="card text-center"
        style={{
          borderColor: "#ffffff"
        }}
      >
        <div class="card-body">
          <button
            onClick={()=>handleClick(order.id)}
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#2EC4B6",
              borderColor: "#2EC4B6",
              marginBottom: "100px",
              width: "200px"
            }}
            
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
