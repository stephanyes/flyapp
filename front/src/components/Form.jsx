import React from 'react';
import { Link } from 'react-router-dom';


export default ({ handleUsername, handleEmail, handlePassword, handleSubmit }) => (

    <div>
        <form className="form-signin" action="/">
            <h2 className="form-signin-heading">Please Register</h2>
            <input onChange={handleUsername} type="text" className="form-control" name="username" placeholder="Username" required="" autoFocus="" />
            <input onChange={handleEmail} type="text" className="form-control" name="email" placeholder="Email Address" required="" autoFocus="" />
            <input onChange={handlePassword} type="password" className="form-control" name="password" placeholder="Password" required="" />
            <label className="checkbox">
                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
      </label>
            <Link to="/login">
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>Register</button>
            </Link>
        </form>
    </div>
)


