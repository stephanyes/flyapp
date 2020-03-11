import React from "react";
import NewCategoryAdmin from "../components/NewCategoryAdmin";
import { connect } from "react-redux";

import { createCategory } from "../store/actions/category";

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    createCategory: body => dispatch(createCategory(body))
  };
};

class NewCategoryAdminContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    this.props
      .createCategory(this.state)
      .then(() => this.props.history.push("/categoriesAdmin"));
  }

  render() {
    let { name, img } = this.state;
    return (
      <NewCategoryAdmin
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        nameValue={name}
        imgValue={img}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(NewCategoryAdminContainer);
