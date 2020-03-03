import React from 'react';
import { connect } from 'react-redux'
import { fetchUserModel } from '../store/actions/users'
import Form from '../components/Form'
import { Link } from 'react-router-dom';


class UserLoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleUsername = this.handleUsername.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)

    }

    handleSubmit(e) {
        this.props.crear(this.state)
    }

    handleUsername(e) {
        const value = e.target.value;
        this.setState({ userName: value })
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
                <Form
                    handleUsername={this.handleUsername}
                    handleEmail={this.handleEmail}
                    handlePassword={this.handlePassword}
                    handleSubmit={this.handleSubmit}
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


export default connect(null, mapDispatchToProps)(UserLoginContainer)
