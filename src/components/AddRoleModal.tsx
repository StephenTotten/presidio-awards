import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

interface AddRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleChange: (role: string) => void;
}

const RoleModal: React.FC<AddRoleModalProps> = ({ isOpen, onClose, onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = async () => {
    try {
      if (!selectedRole) {
        console.error('Please select a role before submitting.');
        return;
      }

      const requestBody = {
        username: 'bob',
        addedRole: selectedRole,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}admin/add`,
        requestBody
      );

      console.log('Response:', response.data);
      onRoleChange(selectedRole);
      setSelectedRole('');
      onClose();
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
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
