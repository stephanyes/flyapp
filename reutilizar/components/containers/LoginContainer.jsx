import React from 'react';
import { connect } from 'react-redux'
import { login } from '../store/actions/login'
import FormLogin from '../components/FormLogin'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)

    }

    handleSubmit(e) {
        this.props.logear(this.state)
    }

    handleUsername(e) {
        const value = e.target.value;
        this.setState({ username: value })
    }

    handlePassword(e) {
        const value = e.target.value;
        this.setState({ password: value })
    }
    render() {
        return (
            <div className='form-group'>
                <FormLogin
                    handleUsername={this.handleUsername}
                    handlePassword={this.handlePassword}
                    handleSubmit={this.handleSubmit}
                />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userLogeado: state.userLogged
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return {
        logear: (user) => dispatch(login(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
