import React from "react";
import { connect } from "react-redux";
import { getCategory } from "../store/actions/category";
import Category from '../components/Category'

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    buscandoCategories: () => dispatch(getCategory()) // ACA TENGO QUE USAR LA ACCION, CAMBIAR NOMBRE
  };
};
const mapStateToProps = function (state) {
  return {
    category: state.category.category
  };
};

class CategoryContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.buscandoCategories();
  }


  render() {
    return <Category categorias={this.props.category} />
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
