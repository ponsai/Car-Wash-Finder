import React, {useContext} from 'react'
import AuthContext from "../AuthContext";

const LoginForm = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className="">
            <div className="card">
                <div className="card-body py-5 px-md-5">
                    <form onSubmit={loginUser}>
                        <div className="form-outline mb-4">
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter Username"
                                id="form1"
                                className="form-control"
                            />
                            <label className="form-label" htmlFor="form1">
                                Email
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                id="form2"
                                className="form-control"
                            />
                            <label className="form-label" htmlFor="form2">
                                Password
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-xl">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;