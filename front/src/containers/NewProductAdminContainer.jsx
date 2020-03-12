import React from "react";
import NewProductAdmin from "../components/NewProductAdmin";
import { connect } from "react-redux";
import { getCategory } from "../store/actions/category";
import { createProduct } from "../store/actions/products";

const mapStateToProps = state => {
  return {
    categories: state.category.category
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    searchAllCategories: () => dispatch(getCategory()),
    createProduct: body => dispatch(createProduct(body))
  };
};

class NewProductAdminContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      img_1: "",
      img_2: "",
      categoryId: "1", //va a tener que ser un numero
      price: 0,
      stock: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.searchAllCategories();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    this.props
      .createProduct(this.state) //??? accion que crea producto
      .then(() => this.props.history.push("/editProducts"));
  }

  render() {
    let { categories } = this.props;
    return (
      <NewProductAdmin
        categories={categories}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductAdminContainer);
