import { useState, React } from "react";


const CreatePatientForm = ({ contract, account }) => {
    const [patientID, setPatientID] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");

const handleCreatePatient = async () => {
  if (!patientID || !name || !dob) {
    alert("Please fill all the input parameters first.");
    return;
  }

  try {
    const gasEstimate = await contract.estimateGas.createPatient(patientID, name, dob);
    const tx = await contract.createPatient(patientID, name, dob, {
      gasLimit: gasEstimate,
    });
    await tx.wait();
    alert("Patient created successfully!");
  } catch (error) {
    console.error("Error creating patient:", error);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Error data:", error.data);

    if (error.message.includes("revert")) {
      alert("Patient ID already taken. Please choose another one.");
    } else {
      alert("Failed to create patient.");
    }
  }
};

    
  
    return (
      <div className="form-container">
      <h2>Create Patient</h2>
      <div className="create-patient-container">
        <input
          className="create-patient-input"
          type="text"
          placeholder="Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
        />
      
        <input
          className="create-patient-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="create-patient-input"
          type="text"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      
        <button className="create-patient-button" onClick={handleCreatePatient}>Create Patient</button>

      </div>
      </div>
     
    );
};
export default CreatePatientForm;
