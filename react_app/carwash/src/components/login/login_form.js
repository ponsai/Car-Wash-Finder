import React, {useState} from 'react';
import './css/login_form.css';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from "../../actions/auth";
import { Link } from 'react-router-dom';

const LoginForm = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    if(isAuthenticated){
        return <Navigate replace to='/'/>
    }

    const {email, password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault()
        login(email, password);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Login</h2>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type = 'email'
                        placeholder = 'Enter your email'
                        name = 'email'
                        value = {email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type = 'password'
                        placeholder = 'Enter your password'
                        name = 'password'
                        value = {password}
                        onChange={e => onChange(e)}
                        minLength= '6'
                        required
                    />
                </div>
                <div className="forgot-password">
                    <Link to="../ResetPassword">Forgot password?</Link>
                </div>
                <button type="submit">LOGIN</button>
                <div className="signup-link">
                    <a href="#">SIGN UP</a>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(LoginForm);