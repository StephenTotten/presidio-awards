import { useEffect, useState } from 'react';
import axios from 'axios';

interface Winner {
    nominationId: number;
    nominator: string;
    nominee: string;
    awardType: string;
    awardId: string;
  }

const Winners = () => {
    const [winners, setWinners] = useState<Winner[]>([]);


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}winners`)
      .then(response => {
        setWinners(response.data);
      })
      .catch(error => {
        console.error('Error fetching winners:', error);
      });
  }, []);

  return (
    <div className="center">
      <h2>List of Winners</h2>
      <ul>
        {winners.map(winner => (
          <li key={winner.nominationId}>
            <strong>Winner:</strong> {winner.nominee}, <strong>Award Won:</strong> {winner.awardType}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Winners;
