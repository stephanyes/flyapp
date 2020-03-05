import React from "react";
import { connect } from "react-redux";

// import Search from "../components/Search";
// import NavbarContainer from "./NavbarContainer";
import Navbar from "../components/Navbar";

import { withRouter } from "react-router-dom";
import { fetchSearchBar } from "../store/actions/search";
import Search from "../components/Search";

const mapStateToProps = state => {
  return {
    state
  };
};
const mapDispatchToProps = (dispatch, state) => {
  return {
    productFinder: searched => dispatch(fetchSearchBar(searched))
  };
};

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    let search = evt.target.value;
    this.setState({
      inputValue: search
    });
    if (search.length > 1) {
      this.props
        .productFinder(search)
        .then(() => this.props.history.push("/results"));
    } else return this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <Navbar
          props={this.props}
          state={this.state}
          handleChange={this.handleChange}
        />
        <Search props={this.props} state={this.state} />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
);
