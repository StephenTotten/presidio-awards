import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';

const Nomination: React.FC = () => {
  const [nomineeName, setNomineeName] = useState('');
  const [nomineeEmail, setNomineeEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [award, setAward] = useState('');
  const [projectImpacted, setProjectImpacted] = useState('');
  const [reasonForNomination, setReasonForNomination] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}nomination`,
        {
          nomineeName,
          nomineeEmail,
          department,
          award,
          projectImpacted,
          reasonForNomination,
        }
      );

      console.log('Success: ' + response.data);
    } catch (error) {

      console.error('Error submitting nomination:', error);
    }
  };

  return (
    <div className="nomination-box">
      <h2>Nomination Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="nomineeName"
            value={nomineeName}
            onChange={(e) => setNomineeName(e.target.value)}
            required={true}
          />
          <label>Nominee Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="nomineeEmail"
            value={nomineeEmail}
            onChange={(e) => setNomineeEmail(e.target.value)}
            required={true} />
          <label>Nominee Email</label>
        </div>
        <div className="user-box">
          <select
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required={true}>
            <option value="" disabled>
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
          <select
            name="award"
            value={award}
            onChange={(e) => setAward(e.target.value)}
            required={true}>
            <option value="" disabled>
              Select an Award
            </option>
            <option value="spot">Spot</option>
            <option value="drona">Drona</option>
            <option value="aboveBeyond">Above & Beyond</option>
          </select>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="projectImacted"
            value={projectImpacted}
            onChange={(e) => setProjectImpacted(e.target.value)}
            required={true} />
          <label>Project Impacted</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="reasonForNomination"
            value={reasonForNomination}
            onChange={(e) => setReasonForNomination(e.target.value)}
            required={true} />
          <label>Reason for Nomination</label>
        </div>
        <Button text="Submit"></Button>
      </form>
    </div>
  );
};

export default Nomination;
