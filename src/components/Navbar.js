import React from 'react';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2F70AF" }}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#f4f4f4" }} href="details.html">Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#f4f4f4" }} href="wash-finder.html">Wash Finder</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#f4f4f4" }} href="about.html">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "#f4f4f4" }} href="login-home.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  

export default Navbar;
