import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import Axios from "axios";

class ProductIDContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      products: ""
    };
  }
  componentDidMount() {
    Axios.get("/cart/products").then(algo => this.setState({ products: algo }));
  }

  render() {
    return <Cart carrito={this.state.products} />;
  }
}

const mapStateToProps = state => {
  return {
    product: state.productList.selectedProduct
  };
};

export default connect(mapStateToProps)(ProductIDContainer);
