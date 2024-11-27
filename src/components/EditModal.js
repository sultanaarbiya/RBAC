import React, { useState } from 'react';
import '../styles/EditModal.css';

function EditModal({ role, onSave, onCancel }) {
  const [name, setName] = useState(role.name);
  const [description, setDescription] = useState(role.description);
  const [permissions, setPermissions] = useState(role.permissions.join(', '));

  const handleSubmit = () => {
    const updatedRole = {
      ...role,
      name,
      description,
      permissions: permissions.split(',').map((perm) => perm.trim())
    };
    onSave(updatedRole);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Role</h3>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        
        <label>Description:</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        
        <label>Permissions (comma-separated):</label>
        <input value={permissions} onChange={(e) => setPermissions(e.target.value)} />
        
        <div className="modal-actions">
          <button onClick={handleSubmit} className="save-button">Save</button>
          <button onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
