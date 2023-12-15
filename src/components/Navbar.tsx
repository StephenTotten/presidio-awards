import React from 'react';
import Button from '../components/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Button text="Dashboard"/>
      <Button text="Nominate"/>
      <Button text="Logout" id="logoutButton"/>

    </nav>
  );
};

export default Navbar;
