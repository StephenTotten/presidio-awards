import { useState } from 'react';
import Button from '../components/Button';
import RejectionModal from '../components/RejectionModal';

const Approval = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReject = (reason: string) => {
    console.log('Reason for rejection:', reason);
  };

  return (
    <>
      <h1 className="nomTitle">Nominations</h1>
      <div className="nominations">
        <h2>Nick Truong: Spot Award</h2>
        <Button text="Approve" />
        <Button text="Reject" id="rejectButton" onClick={() => setModalOpen(true)} />
      </div>

      <RejectionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onReject={handleReject}
      />
    </>
  );
};

export default Approval;
