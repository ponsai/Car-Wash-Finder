import React, {useState} from 'react';
import './login/css/login_form.css';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

const SignUp = ({ signup, isAuthenticated }) => {
    const[accountCreated, setAccountCreated] = useState(false);

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password: '',
        re_password: ''
    });

    const { name, email, password, re_password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault()
        if(password === re_password) {
            signup(name, email, password, re_password);
            setAccountCreated(true);
        }
    };

    if(isAuthenticated){
        return <Navigate replace to='/'/>
    }
    if(accountCreated){
        return <Navigate replace to='/Login'/>
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Sign Up</h2>
                <p>Create your account:</p>
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type = 'text'
                        placeholder = 'Name*'
                        name = 'name'
                        value = {name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type = 'email'
                        placeholder = 'Email*'
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
                        placeholder = 'Password*'
                        name = 'password'
                        value = {password}
                        onChange={e => onChange(e)}
                        minLength= '6'
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type = 'password'
                        placeholder = 'Confirm Password*'
                        name = 're_password'
                        value = {re_password}
                        onChange={e => onChange(e)}
                        minLength= '6'
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { signup })(SignUp);