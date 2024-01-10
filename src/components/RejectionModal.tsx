import React, { useState } from 'react';
import Button from '../components/Button';

interface RejectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReject: (reason: string) => void;
}

const RejectionModal: React.FC<RejectionModalProps> = ({ isOpen, onClose, onReject }) => {
  const [reason, setReason] = useState('');

  const handleReject = () => {
    onReject(reason);
    setReason('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Reason for Rejection</h2>
        <div className="user-box">
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <Button text="Submit" onClick={handleReject} />
      </div>
    </div>
  );
};

export default RejectionModal;
