import React from "react";
import CategoriesAdmin from "../components/CategoriesAdmin";
import { connect } from "react-redux";
import {
  getCategory,
  deleteCategory,
  fetchCategory
} from "../store/actions/category";

const mapStateToProps = state => {
  return {
    categories: state.category.category
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    searchAllCategories: () => dispatch(getCategory()),
    deleteCategories: id => dispatch(deleteCategory(id)),
    selectCategory: id => dispatch(fetchCategory(id))
  };
};

class CategoriesAdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.searchAllCategories();
  }

  handleDelete(category) {
    this.props.deleteCategories(category);
  }

  handleSelect(id) {
    this.props
      .selectCategory(id)
      .then(() => this.props.history.push(`/editCategoryAdmin/${id}`));
  }

  render() {
    let { categories } = this.props;

    return (
      <CategoriesAdmin
        categories={categories}
        handleDelete={this.handleDelete}
        handleSelect={this.handleSelect}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesAdminContainer);
