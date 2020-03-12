import React from "react";

import Cart from "../components/Cart";
// import Categories from "../components/Categories";
import { connect } from "react-redux";
import Axios from "axios";
import { removeProduct } from "../store/actions/cart";
import { Redirect, withRouter } from "react-router-dom";
import NewCategoryAdmin from "../components/NewCategoryAdmin";

const mapStateToProps = state => {
  return {
    product: state.productList.selectedProduct,
    state
  };
};

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     eliminar: (newCart) => dispatch(removeProduct(newCart)),

//   };
// };

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.goTocheckOut = this.goTocheckOut.bind(this);
  }
  componentDidMount() {
    if (this.props.state.userLogin.loginUser) {
      Axios.get("/cart/products")
        .then(algo => algo.data)
        .then(algo => {
          this.setState({ products: algo });
        });
    }
  }

  componentWillMount() {
    if (this.props.state.userLogin.loginUser) {
      Axios.get("/cart/products")
        .then(algo => algo.data)
        .then(algo => {
          this.setState({ products: algo });
        });
    }
    //   let data = Object.assign({}, localStorage)
    //   let prod = Object.values(data)
    //   let producto = prod.map((e)=> JSON.parse(e))
    //   this.setState({ products:producto})
  }

  handleClick(e) {
    const logueado = this.props.state.userLogin.loginUser;
    if (!logueado) {
      let id = e.toString();
      window.localStorage.removeItem(id);
      window.location.reload();
    } else {
      Axios.post("/cart/delete", { e });
      window.location.reload();
    }
    // let newCart = this.props.state.cart.cart;
    // for(let i=0;i<newCart.length;i++){
    //   if (newCart[i].id == e){newCart.splice(i, 1)}}
    // this.props.eliminar(newCart)
  }

  goTocheckOut() {
    Axios.post("/order/create", (req, res) => {});
    this.props.history.push("/checkout")
  }

  render() {
    const logueado = this.props.state.userLogin.loginUser;
    return (
      <Cart
        loged={logueado}
        handleClick={this.handleClick}
        carrito={this.state.products}
        cart={this.props.state.cart.cart}
        checkOut={this.goTocheckOut}
      />
    );
    // return <Categories />;
  }
}

export default withRouter(connect(mapStateToProps, null)(CartContainer));
