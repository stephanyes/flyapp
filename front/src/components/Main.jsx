import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import HomeContainer from "../containers/HomeContainer";
import RegisterContainer from "../containers/RegisterContainer";
import ProductsContainer from "../containers/ProductsContainer";
import ProductIDContainer from "../containers/productIDContainer";
import CartContainer from "../containers/CartContainer";
import NavbarContainer from "../containers/NavbarContainer";
import Footer from "../components/Footer";
import ProfileContainer from "../containers/ProfileContainer";

export default class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <NavbarContainer />

        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/experiences" component={ProductsContainer} />
          <Route exact path="/experience" component={ProductIDContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/profile" component={ProfileContainer} />

          {/* <Redirect from="/" to="/" />  */}
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

// export default connect(mapStateToProps)(Main);
