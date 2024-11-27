import React, { useState } from 'react';
import RoleCard from './RoleCard';
import EditModal from './EditModal'; // Import EditModal here
import '../styles/RoleManagement.css';

function RoleManagement() {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', description: 'Full access to all resources.', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', description: 'Can edit content.', permissions: ['Read', 'Write'] },
    { id: 3, name: 'Viewer', description: 'Can only view content.', permissions: ['Read'] }
  ]);

  const [editingRole, setEditingRole] = useState(null);

  const handleEdit = (role) => {
    setEditingRole(role);
  };

  const handleSave = (updatedRole) => {
    setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)));
    setEditingRole(null);
  };

  const handleDelete = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <div className="roles-grid">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>

      {editingRole && (
        <EditModal role={editingRole} onSave={handleSave} onCancel={() => setEditingRole(null)} />
      )}
    </div>
  );
}

export default RoleManagement;