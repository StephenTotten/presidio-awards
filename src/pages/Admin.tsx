import { useState } from 'react';
import Button from '../components/Button';
import AddRoleModal from '../components/AddRoleModal';
import RemoveRoleModal from '../components/RemoveRoleModal';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [isAddRoleModalOpen, setAddRoleModalOpen] = useState(false);
  const [isRemoveRoleModalOpen, setRemoveRoleModalOpen] = useState(false);

  return (
      <div className="center">
        <Link to="../winners">
          <Button text="List of Winners" id="winbutton"/>
        </Link>
        <h2>Name: bob</h2>
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
}

export default Admin;
