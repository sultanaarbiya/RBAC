import React, { useState } from 'react';
import '../styles/Modals.css'; // Updated path

function UserFormModal({ onClose, onSubmit }) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, role });
      onClose();
    };
  
    return (
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <h3>Add User</h3>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
          <button type="submit">Submit</button>
          <button onClick={onClose}>Close</button>
        </form>
      </div>
    );
}

export default UserFormModal;
