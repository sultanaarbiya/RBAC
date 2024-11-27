import React from 'react';
import '../styles/Navbar.css';
import  image from'../assets/user.png'
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">RBAC Admin</h1>
      <div className="user-info">
        <span>Admin</span>
        <img src={image} alt="User Icon" className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
