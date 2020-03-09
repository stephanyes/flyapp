import React from "react";
import { connect } from "react-redux";

import Products from "../components/Products";
import { fetchProducts } from "../store/actions/products";

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    buscandoProducts: () => dispatch(fetchProducts())
  };
};
const mapStateToProps = function(state) {
  return {
    products: state.productList.products
  };
};

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.buscandoProducts();
  }

  componentWillMount() {
    this.props.buscandoProducts();
  }

  render() {
    return <Products products={this.props.products} />;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
