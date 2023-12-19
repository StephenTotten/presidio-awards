import React from 'react';
import Button from '../components/Button';

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RejectionModal: React.FC<ApprovalModalProps> = ({ isOpen, onClose }) => {

  const handleApprove = () => {
    console.log('Nominee Approved!');
    onClose();
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

export default RejectionModal;
