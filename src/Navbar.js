import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navigation-section"> {/* Use <nav> for semantic HTML */}
      <div className="nav-links">
        <Link to="/" className="link-button">
          Home
        </Link>
        <Link to="/signin" className="link-button">
          Sign In
        </Link>
        <Link to="/onetimetaskmanager" className="link-button">
          Task Manager
        </Link>
        <Link to="/exp" className="link-button">
          Expances
        </Link>
        <Link to="/inv" className="link-button">
        Invoice
        </Link>
        <Link to="/listrender" className="link-button">
        List rendering concept
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
