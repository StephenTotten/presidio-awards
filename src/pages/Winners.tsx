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
    <div className="winner">
      <h1>List of Winners</h1>
      <table>
        <thead>
          <tr>
            <th>Winner</th>
            <th>Award Won</th>
          </tr>
        </thead>
        <tbody>
          {winners.map(winner => (
            <tr key={winner.nominationId}>
              <td>{winner.nominee}</td>
              <td>{winner.awardType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Winners;
