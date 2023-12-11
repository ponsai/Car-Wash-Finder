import React, {useState} from 'react';
import './login/css/login_form.css';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from "../actions/auth";

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        email: ''
    });

    if(requestSent){
        return <Navigate replace to='/'/>
    }

    const { email } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Request Password Reset:</h2>
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
                <button type="submit">Reset Password</button>
            </form>
        </div>
    )
};

export default connect(null, { reset_password })(ResetPassword);