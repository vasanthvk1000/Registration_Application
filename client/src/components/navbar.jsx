import React, {  } from "react";
import {fetchToken} from './Auth.jsx'
 
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Vasanth</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Link</a>
            </li>
          </ul>
          <div className="d-flex">
            {
                fetchToken() 
                ? (
                    <p>You are logged in!</p>
                )
                : (
                  <a className="btn btn-outline-primary" href="signup">Sign Up</a>
                )
            }
          </div>
        </div>
      </div>
    </nav>
   
  );
};
   
export default Navbar;