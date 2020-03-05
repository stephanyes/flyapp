import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";
import { fetchHomeProducts } from "../store/actions/home";
import axios from "axios";

import { mantenermeLogueado } from "../store/actions/login";

const mapStateToProps = function(state) {
  return {
    homeProducts: state.home.homeProducts
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    buscandoProductos: () => dispatch(fetchHomeProducts()),
    mantenermeLogueado: () => dispatch(mantenermeLogueado())
  };
};

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.buscandoProductos();
    this.props.mantenermeLogueado();
  }

  render() {
    return <Home products={this.props.homeProducts} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
