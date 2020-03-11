import React from "react";
import EditProductAdmin from "../components/EditProductAdmin";
import { connect } from "react-redux";
import { getCategory } from "../store/actions/category";
import { editProduct, fetchSingleProduct } from "../store/actions/products"; //hacer editProduct

const mapStateToProps = state => {
  return {
    categories: state.category.category,
    product: state.productList.selectedProduct
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    searchAllCategories: () => dispatch(getCategory()),
    fetchSingleProduct: id => dispatch(fetchSingleProduct(id)),
    editProduct: (id, body) => dispatch(editProduct(id, body))
  };
};

class EditProductAdminContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      img_1: "",
      img_2: "",
      categoryId: "1",
      price: 0,
      stock: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.searchAllCategories();
    this.props.fetchSingleProduct(this.props.match.params.id).then(() => {
      this.setState(this.props.product);
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    this.props
      .editProduct(this.props.match.params.id, this.state) //??? accion que crea producto
      .then(() => this.props.history.push("/editProducts"));
  }

  render() {
    let { categories } = this.props;
    return (
      <EditProductAdmin
        categories={categories}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductAdminContainer);
