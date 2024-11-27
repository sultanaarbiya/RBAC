import React from 'react';
import '../styles/RoleCard.css';

function RoleCard({ role, onEdit, onDelete }) {
  return (
    <div className="role-card">
      <h3 className="role-title">{role.name}</h3>
      <p className="role-description">{role.description}</p>
      <ul className="permissions-list">
        {role.permissions.map((permission) => (
          <li key={permission} className="permission-item">{permission}</li>
        ))}
      </ul>
      <div className="role-card-actions">
        <button className="edit-button" onClick={() => onEdit(role)}>Edit</button>
        
        <button className="delete-button" onClick={() => onDelete(role.id)}>Delete</button>
      </div>
    </div>
  );
}

export default RoleCard;
