import React from 'react';
import './App.css';
import pawPrint from '../src/64431.png';

export default function Navbar () {
return (
    <nav className="navbar navbar-expand-lg navCustom bg-white border-bottom border-3 border-dark">
    <div className="container-fluid">
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto me-auto mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><img src={pawPrint} className="rotateLeft me-2" height="20px" width="20px"></img>  Schedule Your Dog</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link active" href="#" ><img src={pawPrint} className="rotateLeft me-2" height="20px" width="20px"></img>  Current Schedule</a>
          </li>
          </ul>
      </div>
    </div>
  </nav>
)

}