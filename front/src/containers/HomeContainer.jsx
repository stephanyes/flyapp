import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";
import { fetchHomeProducts } from "../store/actions/home";
const mapStateToProps = function (state) {
  return {
    homeProducts: state.home.homeProducts
  }
}
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    buscandoProductos: () => dispatch(fetchHomeProducts())
  };
};
class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.buscandoProductos()
  }
  render() {
    //console.log(this.props.homeProducts);
    return (
      <Home
        // handleChange={this.handleChange}
        // handleSubmit={this.handleSubmit}
        products={this.props.homeProducts}
      />
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);