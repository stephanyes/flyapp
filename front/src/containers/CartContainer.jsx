import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import Axios from "axios";
import { removeProduct } from "../store/actions/cart";

const mapStateToProps = state => {
  return {
    product: state.productList.selectedProduct,
    state
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    eliminar: (newCart) => dispatch(removeProduct(newCart)),
   
  };
};

class ProductIDContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      products: ""
    };
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount() {
    Axios.get("/cart/products")
    .then(algo => algo.data)
    .then(algo => {this.setState({ products: algo })})
  }

  handleClick(e){
    let newCart = this.props.state.cart.cart;
    for(let i=0;i<newCart.length;i++){
      if (newCart[i].id == e){newCart.splice(i, 1)}}
    this.props.eliminar(newCart)
  }  

  render() {
    return <Cart handleClick={this.handleClick} carrito={this.state.products} cart={this.props.state.cart.cart} />;
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductIDContainer);
