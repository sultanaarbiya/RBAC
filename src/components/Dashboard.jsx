import React from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to the RBAC Admin Dashboard</h2>
      <div className="stats-cards">
        <div className="card">
          <h3>Users</h3>
          <p>Manage and control users</p>
        </div>
        <div className="card">
          <h3>Roles</h3>
          <p>Create and assign roles</p>
        </div>
        <div className="card">
          <h3>Permissions</h3>
          <p>Customize access control</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
