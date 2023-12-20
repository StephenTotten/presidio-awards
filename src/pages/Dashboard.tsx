import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Nomination {
  nominationId: number;
  nominator: string;
  nominee: string;
  awardType: string;
  awardId: string;
}

const Dashboard: React.FC = () => {
  const [nomination, setNomination] = useState<Nomination | null>(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}nomination/personal`)
      .then(response => {
        console.log('Actual response:', response.data);
        if (response.data && typeof response.data === 'object') {
          setNomination(response.data);
        } else {
          console.error('Invalid data format received. Expected an object.');
        }
      })
      .catch(error => {
        console.error('Error fetching nomination:', error);
      });
  }, []);

  return (
    <div className="history">
      <h1>My Nomination History</h1>
      <h2>Nominations I've Made</h2>
      {nomination && (
        <ul>
          <li key={nomination.nominationId}>
            Nominee: {nomination.nominee}, Award Type: {nomination.awardType}
          </li>
        </ul>
      )}
      <h2>Nominations I've Received</h2>
      <p>Nothing yet! Keep at it!</p>
    </div>
  );
}

export default Dashboard;
