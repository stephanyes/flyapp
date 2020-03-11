import React from "react";
import { connect } from "react-redux";
import ProductsAdmin from "../components/ProductsAdmin";
import { fetchProducts, deleteProduct } from "../store/actions/products";

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    buscandoProducts: () => dispatch(fetchProducts()),
    deleteProduct: id => dispatch(deleteProduct(id))
  };
};
const mapStateToProps = function(state) {
  return {
    products: state.productList.products
  };
};
class ProductsAdminContainer extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.buscandoProducts();
  }

  handleDelete(id) {
    this.props.deleteProduct(id);
  }

  render() {
    return (
      <ProductsAdmin
        products={this.props.products}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsAdminContainer);
