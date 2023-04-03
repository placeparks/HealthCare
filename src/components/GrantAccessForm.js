import { useState, React } from "react";


const GrantAccessForm = ({ contract, account }) => {
    const [patientID, setPatientID] = useState("");
    const [authorizedDoctor, setAuthorizedDoctor] = useState("");
  
    const handleGrantAccess = async () => {
        if (!contract) {
            alert("Contract is not available.");
            return;
        }

        try {
          const tx = await contract.grantAccess(patientID, authorizedDoctor);
          await tx.wait();
          alert("Access granted successfully!");
        } catch (error) {
          console.error("Error granting access:", error);
          alert("Failed to grant access.");
        }
    };
  
    return (
      <div className="form-container">
        <h2>Grant Access</h2>
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
        <button className="create-patient-button"  onClick={handleGrantAccess}>Grant Access</button>
      </div>
      </div>
    );
};
export default GrantAccessForm;
