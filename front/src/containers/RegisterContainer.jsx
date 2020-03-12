import React from "react";
import { connect } from "react-redux";
import { fetchUserModel } from "../store/actions/register";
import Register from "../components/Register";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      address1: null,
      address2: null,
      address3: null,
      postCode: null,
      email: null,
      phone: null, //EN EL MERGE, AGREGAR PHONE AL FORM
      password: null,
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleAddress1 = this.handleAddress1.bind(this);
    this.handleAddress2 = this.handleAddress2.bind(this);
    this.handleAddress3 = this.handleAddress3.bind(this);
    this.handlePostCode = this.handlePostCode.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props
      .crear(this.state)
      .then(() => this.props.history.push("/login"))
      .catch(() => this.setState({ error: true }));
    // .catch(err => console.log(err));
  }

  handleFirstName(e) {
    const value = e.target.value;
    this.setState({ firstName: value.trim() || null });
  }
  handleLastName(e) {
    const value = e.target.value;
    this.setState({ lastName: value.trim() || null });
  }
  handleAddress1(e) {
    const value = e.target.value;
    this.setState({ address1: value.trim() || null });
  }
  handleAddress2(e) {
    const value = e.target.value;
    this.setState({ address2: value.trim() || null });
  }
  handleAddress3(e) {
    const value = e.target.value;
    this.setState({ address3: value.trim() || null });
  }
  handlePostCode(e) {
    const value = e.target.value;
    this.setState({ postCode: value.trim() || null });
  }
  handlePhone(e) {
    const value = e.target.value;
    this.setState({ phone: value.trim() || null });
  }
  handleEmail(e) {
    const value = e.target.value;
    this.setState({ email: value.trim() || null });
  }
  handlePassword(e) {
    const value = e.target.value;
    this.setState({ password: value.trim() || null });
  }
  render() {
    return (
      <div className="form-group">
        <Register
          handleFirstName={this.handleFirstName}
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          handleSubmit={this.handleSubmit}
          handleLastName={this.handleLastName}
          handleAddress1={this.handleAddress1}
          handleAddress2={this.handleAddress2}
          handleAddress3={this.handleAddress3}
          handlePostCode={this.handlePostCode}
          handlePhone={this.handlePhone}
          state={this.state}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, state) => {
  return {
    crear: user => dispatch(fetchUserModel(user))
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
