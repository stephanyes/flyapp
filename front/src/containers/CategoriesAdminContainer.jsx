import React from "react";
import CategoriesAdmin from "../components/CategoriesAdmin";
import { connect } from "react-redux";
import { getCategory, deleteCategory } from "../store/actions/category";

const mapStateToProps = state => {
  return {
    categories: state.category.category
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    searchAllCategories: () => dispatch(getCategory()),
    deleteCategories: id => dispatch(deleteCategory(id))
  };
};

class CategoriesAdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.searchAllCategories();
  }

  handleDelete(category) {
    // console.log(category);
    this.props.deleteCategories(category);
  }

  render() {
    let { categories } = this.props;

    return (
      <CategoriesAdmin
        categories={categories}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesAdminContainer);
