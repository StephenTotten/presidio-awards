import { useState, useEffect } from 'react';
import Button from '../components/Button';
import RejectionModal from '../components/RejectionModal';
import ApprovalModal from '../components/ApprovalModal';
import axios, { AxiosResponse } from 'axios';

interface Nominee {
  nominationId: number;
  nominator: string;
  nominee: string;
  awardType: string;
  awardId: string;
}

const Approval = () => {
  const [isRejectOpen, setRejectOpen] = useState(false);
  const [isApproveOpen, setApproveOpen] = useState(false);
  const [nomineeData, setNomineeData] = useState<Nominee[] | null>(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}nomination`)
      .then((response: AxiosResponse<Nominee[]>) => setNomineeData(response.data))
      .catch(error => console.error('Error fetching nominee data:', error));
  }, []);

  const handleReject = (reason: string) => {
    console.log('Reason for rejection:', reason);
  };

  return (
    <>
      <h1 className="nomTitle">Nominations</h1>
      <div className="nominations">
        {nomineeData && nomineeData.map(nominee => (
          <div key={nominee.nominationId}>
            <h2>{`${nominee.nominee}: ${nominee.awardType}, Nominated by ${nominee.nominator}`}</h2>
            <Button text="Approve" onClick={() => setApproveOpen(true)} />
            <Button text="Reject" id="rejectButton" onClick={() => setRejectOpen(true)} />
          </div>
        ))}
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
