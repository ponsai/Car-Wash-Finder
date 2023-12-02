import React from 'react';
import LoginForm from "./login_form";
const Body = () => {
    return (
        <div>
            <section className="">
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: '#00457E' }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-6">
                                <h2 style={{ color: '#f4f4f4' }} className="my-3 display-3 fw-bold ls-tight">
                                    Subscribe <br />
                                    <span style={{ color: '#f4f4f4' }}>to our <br /> newsletter <br /> now!</span>
                                </h2>

                                <button className="btn btn-primary btn-lg">
                                    Subscribe
                                </button>
                            </div>

                            <div className = "col-lg-6 mb-5 mb-lg-0">
                                <LoginForm/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Body