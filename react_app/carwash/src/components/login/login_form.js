import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [isSignIn, setIsSignIn] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/wash-finder')

    }

    return (
        <div className="">
            <div className="card">
                <div className="card-body py-5 px-md-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                id="form1"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form1">
                                Email
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                id="form2"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="form2">
                                Password
                            </label>
                        </div>

                        <div className="form-check d-flex justify-content-left mb-4">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                id="form3"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label className="form-check-label" htmlFor="form3">
                                Remember me
                            </label>
                        </div>

                        <div className="mb-3">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">
                            {isSignIn ? 'Sign In' : 'Sign Up'}
                        </button>

                        <p className="mb-0 text-center">
                            {isSignIn ? "Don't have an account?" : 'Already have an account?'}
                            <span
                                className="text-primary"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setIsSignIn(!isSignIn)}
                            >
                {isSignIn ? ' Sign Up' : ' Sign In'}
              </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;