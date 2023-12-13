import React from 'react';
import Button from '../components/Button';

const Nomination: React.FC = () => {
  return (
    <div className="login-box">
      <h2>Nomination Form</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Employee Name</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Employee Email</label>
        </div>
        <div className="user-box">
          <select name="award" required={true}>
            <option value="" disabled selected>
              Select an Award +
            </option>
            <option value="spot">Spot</option>
            <option value="drona">Drona</option>
            <option value="aboveBeyond">Above & Beyond</option>
          </select>
        </div>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Reason for Nomination</label>
        </div>
        <Button text="Submit"></Button>
      </form>
    </div>
  );
};

export default Nomination;
