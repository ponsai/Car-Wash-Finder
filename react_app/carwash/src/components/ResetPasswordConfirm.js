import React, {useState} from 'react';
import './login/css/login_form.css';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({ match, reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        new_password:'',
        re_new_password:''
    });

    if(requestSent){
        return <Navigate replace to='/'/>
    }

    const { new_password, re_new_password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Request Password Reset:</h2>
                <div className="input-group">
                    <label>Enter New Password:</label>
                    <input
                        type = 'password'
                        placeholder = 'New Password'
                        name = 'new_password'
                        value = {new_password}
                        onChange={e => onChange(e)}
                        minLength= '6'
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Re-enter New Password:</label>
                    <input
                        type = 'password'
                        placeholder = 'Confirm New Password'
                        name = 're_new_password'
                        value = {re_new_password}
                        onChange={e => onChange(e)}
                        minLength= '6'
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    )
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);