import { useState, React } from "react";


const AddMedicalRecordForm = ({ contract, account }) => {
  const [patientID, setPatientID] = useState("");
  const [medicalRecord, setMedicalRecord] = useState("");

  const handleAddMedicalRecord = async () => {
    if (!contract) {
      alert("Contract is not available.");
      return;
    }
    try {
      await contract.addMedicalRecord(patientID, medicalRecord);

      alert("Medical record added successfully!");
    } catch (error) {
      console.error("Error adding medical record:", error);
      alert("Failed to add medical record.");
    }
  };
  return (
    <div className="form-container">
      <h2>Add Medical Record</h2>
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
        label="Medical Record"
        placeholder="Medical Record"
        value={medicalRecord}
        onChange={(e) => setMedicalRecord(e.target.value)}
      />
      <button className="create-patient-button" variant="contained" color="primary" onClick={handleAddMedicalRecord}>Add Medical Record</button>
    </div>
    </div>
  );
};
export default AddMedicalRecordForm;
