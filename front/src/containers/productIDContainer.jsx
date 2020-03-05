import React from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/actions/products";

class ProductIDContainer extends React.Component {
  componentDidMount() {
    this.props.seteador(this.props.match.params.id);
  }
  render() {
    const { product } = this.props;
    return <Product producto={product} />;
  }
}

const mapStateToProps = state => {
  return {
    product: state.productList.selectedProduct
  };
};

const mapDispatchToProps = dispatch => ({
  seteador: id => dispatch(fetchSingleProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIDContainer);
