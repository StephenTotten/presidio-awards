import { useState } from 'react';
import Button from '../components/Button';
import RoleModal from '../components/RoleModal';

const Admin = () => {
  const [isRoleModalOpen, setRoleModalOpen] = useState(false);

  return (
    <div className="center">
      <h2>Name: Stephen Totten</h2>
      <h2>Role: Approver</h2>
      <Button text="Change Role" onClick={() => setRoleModalOpen(true)} />
      
      <RoleModal
        isOpen={isRoleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        onRoleChange={(role: any) => {

          console.log('New role selected:', role);
          setRoleModalOpen(false);
        }}
      />
    </div>
  );
}

export default Admin;
