import { useState, React } from "react";


const RevokeAccessForm = ({ contract, account }) => {
    const [patientID, setPatientID] = useState("");
    const [authorizedDoctor, setAuthorizedDoctor] = useState("");
  
    const handleRevokeAccess = async () => {
      if (!contract) {
        alert("Contract is not available.");
        return;
    }
      try {
        await contract.revokeAccess(patientID, authorizedDoctor)

        alert("Access revoked successfully!");
      } catch (error) {
        console.error("Error revoking access:", error);
        alert("Failed to revoke access.");
      }
    };
  
    return (
      <div className="form-container">
        <h2>Revoke Access</h2>
        <div className="create-patient-container">
        <input
          className="create-patient-input"
          label="Patient ID"
          placeholder="Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
        />

        <input
          className="create-patient-input"
          label="Doctor Address"
          placeholder="Doctor's Address"
          value={authorizedDoctor}
          onChange={(e) => setAuthorizedDoctor(e.target.value)}
        />
        <button className="create-patient-button"  onClick={handleRevokeAccess}>Revoke Access</button>
      </div>
      </div>
    );
  };
  export default RevokeAccessForm;
