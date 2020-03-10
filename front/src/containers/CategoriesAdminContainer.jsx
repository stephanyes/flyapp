import React from "react";
import CategoriesAdmin from "../components/CategoriesAdmin";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

class EditUsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CategoriesAdmin />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUsersContainer);
