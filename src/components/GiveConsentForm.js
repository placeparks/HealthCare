import { useState, React } from "react";


const GiveConsentForm = ({ contract, account }) => {
    const [patientID, setPatientID] = useState("");
  
    const handleGiveConsent = async () => {
      if (!contract) {
        alert("Contract is not available.");
        return;
    }
      try {
        await contract.giveConsent(patientID);
        alert("Consent given successfully!");
      } catch (error) {
        console.error("Error giving consent:", error);
        alert("Failed to give consent.");
      }
    };
  
    return (
      <div className="form-container">
        <h2>Give Consent</h2>
        <div className="create-patient-container">
        <input
          className="create-patient-input"
          label="Patient ID"
          placeholder="Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
        />
        <button className="create-patient-button" onClick={handleGiveConsent}>Give Consent</button>
      </div>
      </div>
    );
  };
  export default GiveConsentForm;