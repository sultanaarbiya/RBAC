import React, { useState } from 'react';
import '../styles/Modals.css'; // Updated path

function PermissionModal({ onClose, onSubmit }) {
    const [name, setName] = useState('');
    const [permissions, setPermissions] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, permissions });
      onClose();
    };
  
    return (
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <h3>Add Role</h3>
          <input type="text" placeholder="Role Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Permissions" value={permissions} onChange={(e) => setPermissions(e.target.value)} />
          <button type="submit">Submit</button>
          <button onClick={onClose}>Close</button>
        </form>
      </div>
    );
  
}

export default PermissionModal;
