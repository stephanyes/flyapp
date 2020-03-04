import React from 'react';
import { connect } from 'react-redux'
import { fetchUserModel } from '../store/actions/register'
import Register from '../components/Register'


class RegisterContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      address3: "",
      postCode: "",
      email: "",
      phone: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleAddress1 = this.handleAddress1.bind(this)
    this.handleAddress2 = this.handleAddress2.bind(this)
    this.handleAddress3 = this.handleAddress3.bind(this)
    this.handlePostCode = this.handlePostCode.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePhone = this.handlePhone.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.crear(this.state)
  }
  handleFirstName(e) {
    const value = e.target.value;
    this.setState({ firstName: value })
  }
  handleLastName(e) {
    const value = e.target.value;
    this.setState({ lastName: value })
  }
  handleAddress1(e) {
    const value = e.target.value;
    this.setState({ address1: value })
  }
  handleAddress2(e) {
    const value = e.target.value;
    this.setState({ address2: value })
  }
  handleAddress3(e) {
    const value = e.target.value;
    this.setState({ address3: value })
  }
  handlePostCode(e) {
    const value = e.target.value;
    this.setState({ postCode: value })
  }

  handlePhone(e) {
    const value = e.target.value;
    this.setState({ phone: value })
  }

  handleEmail(e) {
    const value = e.target.value;
    this.setState({ email: value })
  }
  handlePassword(e) {
    const value = e.target.value;
    this.setState({ password: value })
  }
  render() {
    return (
      <div className='form-group'>
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
        />
      </div >
    )
  }
}
const mapDispatchToProps = (dispatch, state) => {
  return {
    crear: (user) => dispatch(fetchUserModel(user))
  }
}


export default connect(null, mapDispatchToProps)(RegisterContainer)
