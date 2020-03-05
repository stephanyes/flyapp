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
  //esta res.data es exactamente igual a lo que hay en el state/userLogin/loginUser pero nunca se borra.
  // este res.data es el argumento que le tenes q pasar a la funcion q vas a crear q va a ejecutar el action y el reducer va a setear en el estado esta info.

  render() {
    return <Home products={this.props.homeProducts} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
