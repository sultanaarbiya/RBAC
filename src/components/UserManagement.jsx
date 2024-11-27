import React, { useState } from 'react';
import '../styles/UserManagement.css'; // Updated path
import UserFormModal from './UserFormModal';

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
  
    const addUser = (user) => setUsers([...users, user]);
  
    return (
      <div className="user-management">
        <h2>User Management</h2>
        <button onClick={() => setShowModal(true)}>Add User</button>
        {showModal && <UserFormModal onClose={() => setShowModal(false)} onSubmit={addUser} />}
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name} - {user.role}</li>
          ))}
        </ul>
      </div>
    );
}

export default UserManagement;

