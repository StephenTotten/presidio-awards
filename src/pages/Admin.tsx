import { useState, useEffect } from 'react';
import Button from '../components/Button';
import AddRoleModal from '../components/AddRoleModal';
import RemoveRoleModal from '../components/RemoveRoleModal';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface User {
  Attributes: { Name: string; Value: string }[];
  Enabled: boolean;
  UserCreateDate: string;
  UserLastModifiedDate: string;
  UserStatus: string;
  Username: string;
}

const Admin = () => {
  const [isAddRoleModalOpen, setAddRoleModalOpen] = useState(false);
  const [isRemoveRoleModalOpen, setRemoveRoleModalOpen] = useState(false);
  const [users, setUsers] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://2fqd5lcig2.execute-api.us-east-1.amazonaws.com/admin/listusers',
          {
            params: { group: 'EMPLOYEE' }
          }
        );

        console.log('API Response:', response);

        setUsers(response.data.Users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="center">
      <Link to="../winners">
        <Button text="List of Winners" id="winbutton" />
      </Link>
      {users && users.map((user) => (
        <h2 key={user.Username}>Name: {user.Username}</h2>
      ))}
      <Button text="Add Role" onClick={() => setAddRoleModalOpen(true)} />
      <Button text="Remove Role" onClick={() => setRemoveRoleModalOpen(true)} />

      <AddRoleModal
        isOpen={isAddRoleModalOpen}
        onClose={() => setAddRoleModalOpen(false)}
        onRoleChange={(role: any) => {
          console.log('New role selected:', role);
          setAddRoleModalOpen(false);
        }}
      />
      <RemoveRoleModal
        isOpen={isRemoveRoleModalOpen}
        onClose={() => setRemoveRoleModalOpen(false)}
        onRoleChange={(role: any) => {
          console.log('New role selected:', role);
          setRemoveRoleModalOpen(false);
        }}
      />
    </div>
  );
};

export default Admin;