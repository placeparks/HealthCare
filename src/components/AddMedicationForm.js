import React, { useState, useEffect } from 'react';


const AddMedicationForm = ({ contract, account, patientID, setPatientID }) => {
  const [medication, setMedication] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  
  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        await contract.getPatientInfo(patientID);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };

    checkAuthorization();
  }, [contract, account, patientID]);

  const handleAddMedication = async (e) => {
    e.preventDefault();
    if (!medication) return;

    try {
      await contract.addMedication(patientID, medication, { from: account });
      setMedication('');
      alert('Medication added successfully!');
    } catch (error) {
      console.error('Error adding medication:', error);
    }
  };

  if (!isAuthorized) {
    return null;
  }


  return (
    <div className="form-container">
        
      <h2>Add Medication</h2>
      <div className="create-patient-container">
      <input
         className="create-patient-input"
        label="Patient ID"
        placeholder="Patient ID"
        value={patientID}
        onChange={(e) => setPatientID(e.target.value)}
      />
      {isAuthorized ? (
        <>
          <input
   className="create-patient-input"
            label="Medication"
            placeholder="Medicine"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          />
          <button className="create-patient-button" variant="contained" color="primary" onClick={handleAddMedication}>Add Medication</button>
        </>
      ) : (
        <p>You are not authorized to add medication for this patient.</p>
      )}
    </div>
    </div>
  );
};

export default AddMedicationForm;
