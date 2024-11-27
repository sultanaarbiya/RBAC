import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ setActivePage }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setActivePage('dashboard')}>Dashboard</li>
        <li onClick={() => setActivePage('users')}>User Management</li>
        <li onClick={() => setActivePage('roles')}>Role Management</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
