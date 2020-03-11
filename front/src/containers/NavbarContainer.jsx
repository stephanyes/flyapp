import React from "react";
import { connect } from "react-redux";

import { fetchSearchBar } from "../store/actions/search";
import { fetchComments } from "../store/actions/comments";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom";

import { mantenermeLogueado, logout } from "../store/actions/login";

const mapStateToProps = state => {
  return {
    state,
    user: state.userLogin.loginUser
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    productFinder: searched => dispatch(fetchSearchBar(searched)),
    mantenermeLogueado: () => dispatch(mantenermeLogueado()),
    logout: user => dispatch(logout(user)),
    traerComments: () => dispatch(fetchComments())
  };
};

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.mantenermeLogueado();
    this.props.traerComments();
  }

  handleSubmit(e) {
    e.preventDefault();
    //hay que prevenir q cuando apreten enter en la busqueda haga un query, deberia no hacer nada
  }

  handleChange(evt) {
    const search = evt.target.value;
    this.setState({
      inputValue: search
    });
    if (search.length > 1) {
      this.props
        .productFinder(search)
        .then(() => this.props.history.push("/results"));
    } else return this.props.history.push("/experiences");
  }

  toggleOpen() {
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true
      });
    } else {
      this.setState({
        isOpen: false
      });
    }
  }

  logout() {
    this.props
      .logout()
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Navbar
          user={user}
          props={this.props}
          state={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          dropdown={this.state.isOpen}
          open={this.toggleOpen}
          logout={this.logout}
        />
        <Search props={this.props} state={this.state} />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
