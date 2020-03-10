import React from "react";
import { connect } from "react-redux";
import CategoriesAdmin from "../components/CategoriesAdmin";

// const mapStatetoprop = state => {};

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {};
// };

class CategoriesContainer extends React.component {
  render() {
    return <CategoriesAdmin />;
  }
}

connect(null, null)(CategoriesContainer);
