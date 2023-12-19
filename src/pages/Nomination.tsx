import React from 'react';
import Button from '../components/Button';

const Nomination: React.FC = () => {
  return (
    <div className="nomination-box">
      <h2>Nomination Form</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Nominee Name</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Nominee Email</label>
        </div>
        <div className="user-box">
          <select name="award" required={true}>
            <option value="" disabled selected>
              Nominee's Department
            </option>
            <option value="appdev">AppDev</option>
            <option value="devops">DevOps</option>
            <option value="cloud-migration">Cloud Migration</option>
            <option value="data-analytics">Data and Analytics</option>
            <option value="qa">QA</option>
            <option value="pmo">PMO</option>
            <option value="cloud-managed-services">Cloud Managed Services</option>
            <option value="g-and-a">G&A</option>
          </select>
        </div>
        <div className="user-box">
          <select name="award" required={true}>
            <option value="" disabled selected>
              Select an Award
            </option>
            <option value="spot">Spot</option>
            <option value="drona">Drona</option>
            <option value="aboveBeyond">Above & Beyond</option>
          </select>
        </div>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Project Impacted</label>
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
