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
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<'nominee' | 'awardType'>('nominee');

  useEffect(() => {
    axios.get<Winner[]>(`${import.meta.env.VITE_BACKEND_URL}winners`)
      .then(response => {
        setWinners(response.data);
      })
      .catch(error => {
        console.error('Error fetching winners:', error);
      });
  }, []);

  const handleSort = (column: 'nominee' | 'awardType') => {
    setSortColumn(column);
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const sortedWinners = [...winners].sort((a, b) => {
    const columnA = a[sortColumn].toUpperCase();
    const columnB = b[sortColumn].toUpperCase();

    if (columnA < columnB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (columnA > columnB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="center">
      <h2>List of Winners</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('nominee')}>
              Winner
              {sortColumn === 'nominee' && (
                <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
            <th onClick={() => handleSort('awardType')}>
              Award Won
              {sortColumn === 'awardType' && (
                <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedWinners.map(winner => (
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
