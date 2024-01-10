import React from 'react';
import Button from '../components/Button';
import axios from 'axios';

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApprovalModal: React.FC<ApprovalModalProps> = ({ isOpen, onClose }) => {

  const handleApprove = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}approval`);
      console.log(response.data);
      onClose();
    } catch (error) {
      console.error('Error while making the POST request:', error);
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Are you sure you want to approve this nominee?</h2>
        <Button text="Confirm Approval" onClick={handleApprove} />
      </div>
    </div>
  );
};

export default ApprovalModal;
