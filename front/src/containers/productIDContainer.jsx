import React from "react";
import Product from "../components/Product";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/actions/products";
import Axios from "axios";
import { fillCart } from "../store/actions/cart";

const mapStateToProps = state => {
  return {
    product: state.productList.selectedProduct,
    state,
    comments: state.comments.comments
  };
};

const mapDispatchToProps = dispatch => ({
  seteador: id => dispatch(fetchSingleProduct(id)),
  carro: producto => dispatch(fillCart(producto))
});

class ProductIDContainer extends React.Component {
  constructor() {
    super();
    this.storingLocal = this.storingLocal.bind(this);
  }
  componentDidMount() {
    this.props.seteador(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  storingLocal(e, producto) {
    e.preventDefault();
    if (!this.props.state.userLogin.loginUser) {
      window.localStorage.setItem(producto.id, JSON.stringify(producto));
      this.props.carro(producto);
    } else Axios.post("/cart/addtocart", { producto });
  }

  render() {
    const { product, comments } = this.props;
    return <Product producto={product} storing={this.storingLocal} comments={comments} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIDContainer);
