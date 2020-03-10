import React from "react";
import Checkout from "../components/Checkout";
import { connect } from "react-redux";
import Axios from "axios";


const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    // eliminar: newCart => dispatch(removeProduct(newCart))
  };
};

class CheckoutContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {this.state = {
    //   products: ""
    // };
    //   products: ""
    // };
    // this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount() {
  //   Axios.get("/cart/products")
  //     .then(algo => algo.data)
  //     .then(algo => {
  //       this.setState({ products: algo });
  //     });
  // }

  // handleClick(e) {
  //   let newCart = this.props.state.cart.cart;
  //   for (let i = 0; i < newCart.length; i++) {
  //     if (newCart[i].id == e) {
  //       newCart.splice(i, 1);
  //     }
  //   }
  //   this.props.eliminar(newCart);
  // }

  render() {
    return <Checkout user={this.props.state.userLogin.loginUser}/>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);
