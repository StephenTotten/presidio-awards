import React, { useState } from 'react';
import Button from './Button';

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleChange: (role: string) => void;
}

const RoleModal: React.FC<AddRoleModalProps> = ({ isOpen, onClose, onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = () => {
    onRoleChange(selectedRole);
    setSelectedRole('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Role</h2>
        <div className="user-box">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            required
          >
            <option value="" disabled></option>
            <option value="EMPLOYEE">Employee</option>
            <option value="APPROVER">Approver</option>
            <option value="SUPER-APPROVER">Super Approver</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <Button text="Submit" onClick={handleRoleChange} />
      </div>
    </div>
  );
};

export default RoleModal;
