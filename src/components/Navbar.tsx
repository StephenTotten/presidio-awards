import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/admin">
        <Button text="Admin"/>
      </Link>
      <Link to="/approval">
        <Button text="Approve/Reject"/>
      </Link>
      <Link to="/nomination">
        <Button text="Nominate"/>
      </Link>
      <Button text="Logout" id="logoutButton"/>

    </nav>
  );
};

export default Navbar;
