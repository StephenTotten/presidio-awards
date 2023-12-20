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

interface NomineeDetails {
  nominator: string;
  nominee: string;
  awardType: string;
}

const Approval = () => {
  const [isRejectOpen, setRejectOpen] = useState(false);
  const [isApproveOpen, setApproveOpen] = useState(false);
  const [nomineeData, setNomineeData] = useState<Nominee[] | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
 
  const [nomineeDetails, setNomineeDetails] = useState<NomineeDetails | null>(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}nomination`)
      .then((response: AxiosResponse<Nominee[]>) => setNomineeData(response.data))
      .catch(error => console.error('Error fetching nominee data:', error));
  }, []);

  const handleReject = (reason: string) => {
    console.log('Reason for rejection:', reason);
  };

  const handleDetailsClick = (nomineeId: number) => {
    setDetailsModalOpen(true);

    axios.get<NomineeDetails>(`${import.meta.env.VITE_BACKEND_URL}nomination/${nomineeId}`)
      .then((response: AxiosResponse<NomineeDetails>) => setNomineeDetails(response.data))
      .catch(error => console.error('Error fetching nominee details:', error));
  };

  return (
    <>
      <h1 className="nomTitle">Nominations</h1>
      <div className="nominations">
        {nomineeData && nomineeData.map(nominee => (
          <div key={nominee.nominationId} id="nominee">
            <h2>{`${nominee.nominee}: ${nominee.awardType}`}</h2>
            <Button text="Details" onClick={() => handleDetailsClick(nominee.nominationId)} />
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

      {detailsModalOpen && (
        <div className="detailsModal">
          <h2>Nominee Details</h2>
          {nomineeDetails ? (
            <>
              <p>Nominated By: {nomineeDetails.nominator}</p>
              <p>Nominee: {nomineeDetails.nominee}</p>
              <p>Award Type: {nomineeDetails.awardType}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <Button text="Close" onClick={() => setDetailsModalOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Approval;
