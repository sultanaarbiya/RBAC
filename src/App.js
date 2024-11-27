import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import './styles/App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar setActivePage={setActivePage} />
        <main className="main-content">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'users' && <UserManagement />}
          {activePage === 'roles' && <RoleManagement />}
        </main>
      </div>
    </div>
  );
}

export default App;
