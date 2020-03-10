import React from "react";
import CategoriesAdmin from "../components/CategoriesAdmin";

import { connect } from "react-redux";

import { getCategory } from "../store/actions/category";

const mapStateToProps = state => {
  return {
    categories: state.category.category
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    searchAllCategories: () => dispatch(getCategory())
  };
};

class EditUsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.searchAllCategories();
  }

  render() {
    let { categories } = this.props;

    return <CategoriesAdmin categories={categories} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUsersContainer);
