import React from 'react';
import logo from '../../../images/logo1.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg_color">
      <div class="container">
        <a class="navbar-brand text-white" href="#">Blood Ai</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={'/home'}>Home</Link>
            </li>
            <li class="nav-item">
              <Link to={'/donorDashboard'}>Donate Blood</Link>
            </li>
            <li class="nav-item">
              <Link to={'/patientDashboard'}>Find Blood</Link>
            </li>
            <li class="nav-item">
              <Link to={'/adminDashboard'}>Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;