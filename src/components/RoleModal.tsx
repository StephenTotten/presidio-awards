import React, { useState } from 'react';
import Button from '../components/Button';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleChange: (role: string) => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ isOpen, onClose, onRoleChange }) => {
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
        <h2>Select Role</h2>
        <div className="user-box">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            required
          >
            <option value="" disabled></option>
            <option value="employee">Employee</option>
            <option value="approver">Approver</option>
            <option value="superApprover">Super Approver</option>
          </select>
        </div>
        <Button text="Submit" onClick={handleRoleChange} />
      </div>
    </div>
  );
};

export default RoleModal;
