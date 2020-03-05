import React from "react";
import { connect } from "react-redux";

import { fetchSearchBar } from "../store/actions/search";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom";

import { mantenermeLogueado } from "../store/actions/login";

const mapStateToProps = state => {
  return {
    state,
    user: state.userLogin.loginUser
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    productFinder: searched => dispatch(fetchSearchBar(searched)),
    mantenermeLogueado: () => dispatch(mantenermeLogueado())
  };
};

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.mantenermeLogueado();
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
    const { user } = this.props;
    return (
      <div>
        <Navbar
          user={user}
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
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
