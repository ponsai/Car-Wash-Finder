import React from 'react';
import logo from '../icon_soap.svg'; // Updated path to the logo

function Header() {
  return (
    <div className="container">
      <h1>
        <img src={logo} width="75" height="75" alt="Bubbles N Brilliance Logo" />
        Bubbles N Brilliance
      </h1>
    </div>
  );
}

export default Header;
