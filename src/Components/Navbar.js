import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Contact Maker Website</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
        </ul>

      </div>
      <form className='ml-auto'>
        <input></input>
        <button className='btn btn-primary'>Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
