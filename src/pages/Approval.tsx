import { useState } from 'react';
import Button from '../components/Button';
import RejectionModal from '../components/RejectionModal';
import ApprovalModal from '../components/ApprovalModal';

const Approval = () => {
  const [isRejectOpen, setRejectOpen] = useState(false);
  const [isApproveOpen, setApproveOpen] = useState(false);

  const handleReject = (reason: string) => {
    console.log('Reason for rejection:', reason);
  };

  return (
    <>
      <h1 className="nomTitle">Nominations</h1>
      <div className="nominations">
        <h2>Nick Truong: Spot Award</h2>
        <Button text="Approve" onClick={() => setApproveOpen(true)}/>
        <Button text="Reject" id="rejectButton" onClick={() => setRejectOpen(true)} />
      </div>

      <RejectionModal
        isOpen={isRejectOpen}
        onClose={() => setRejectOpen(false)}
        onReject={handleReject}
      />

      <ApprovalModal
        isOpen={isApproveOpen}
        onClose={() => setApproveOpen(false)}
      />
    </>
  );
};

export default Approval;
