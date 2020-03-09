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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.mantenermeLogueado();
  }

  handleSubmit(e){
    e.preventDefault()
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
    } 
    else return this.props.history.push("/experiences");
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
          handleSubmit={this.handleSubmit}
        />
        <Search props={this.props} state={this.state} />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
