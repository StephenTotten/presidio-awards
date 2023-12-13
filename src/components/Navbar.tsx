import React from 'react';
import Button from '../components/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Button text="My Profile"/>
      <Button text="Nominate"/>

    </nav>
  );
};

export default Navbar;
