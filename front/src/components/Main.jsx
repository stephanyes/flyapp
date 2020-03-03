import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import HomeContainer from "../containers/HomeContainer";
import RegisterContainer from "../containers/RegisterContainer";
import ProductsContainer from "../containers/productIDContainer";
import ProductIDContainer from "../containers/productIDContainer";
import CartContainer from "../containers/CartContainer";
import NavbarContainer from "../containers/NavbarContainer";

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavbarContainer />

        <Switch>
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/experiences" component={ProductsContainer} />
          <Route path="/experiences/:id" component={ProductIDContainer} />
          <Route exact path="cart" component={CartContainer} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     userLogged: state.userLogged.loginUser
//   };
// };

export default connect(mapStateToProps)(Main);
