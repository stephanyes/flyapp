import React from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/actions/products";

class ProductIDContainer extends React.Component {
  constructor() {
    super();
    this.storingLocal = this.storingLocal.bind(this);
  }
  componentDidMount() {
    this.props.seteador(this.props.match.params.id);
  }

  storingLocal(e, producto) {
    e.preventDefault();
    console.log(producto);
    let algo = JSON.parse(window.localStorage.getItem("testing"));
    if (algo) {
      window.localStorage.setItem(
        "testing",
        JSON.stringify([...algo, producto])
      );
    } else {
      window.localStorage.setItem("testing", JSON.stringify([producto]));
    }
  }

  render() {
    const { product } = this.props;
    return <Product producto={product} storing={this.storingLocal} />;
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
