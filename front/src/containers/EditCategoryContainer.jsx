import React from "react";
import EditCategoryAdmin from "../components/EditCategoryAdmin";
import { connect } from "react-redux";

import { editCategory, fetchCategory } from "../store/actions/category";

const mapStateToProps = state => {
  return {
    singleCategory: state.category.selectedCategory
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    editCategory: (id, body) => dispatch(editCategory(id, body)),
    fetchCategory: id => dispatch(fetchCategory(id))
  };
};

class EditCategoryAdminContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /*NOTA SOBRE EL ComponentDidMount
  Lo estamos usando para dos cosas: 
  1.cargar el category seleccionado
  2.setear en el estado su info, para luego mostrarla en los formularios
  Como fetchCategory es asincronico y setState no, setState se ejecuta antes de que
  fetchCategory se cargue, por eso metemos setState en un then
  */
  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id).then(() => {
      this.setState({
        name: this.props.singleCategory.name,
        img: this.props.singleCategory.img
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick() {
    this.props
      .editCategory(this.props.singleCategory.id, this.state)
      .then(() => this.props.history.push("/category"));
    // console.log(this.props.singleCategory.id, this.state);
  }

  render() {
    let { name, img } = this.state;
    let { singleCategory } = this.props;
    return (
      <EditCategoryAdmin
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        nameValue={name}
        imgValue={img}
        category={singleCategory}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryAdminContainer);
