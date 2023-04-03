import React, { useEffect, useState } from "react";
import getProvider from "../utils/getProvider";
import { ethers } from "ethers"; // Add this import
import {
  Container,
} from "@material-ui/core";
import CreatePatientForm from "./CreatePatientForm";
import GrantAccessForm from "./GrantAccessForm";
import RevokeAccessForm from "./RevokeAccessForm";
import AddMedicalRecordForm from "./AddMedicalRecordForm";
import GiveConsentForm from "./GiveConsentForm";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../constants";
import AddMedicationForm from "./AddMedicationForm";
const HealthcareContract = () => {
  const [providerInstance, setProviderInstance] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [connectedAccount, setConnectedAccount] = useState('');
  const [patientID, setPatientID] = useState('');
  const [patientInfo, setPatientInfo] = useState({});
  const [medicalRecords, setMedicalRecords] = useState([]);


  useEffect(() => {
    const init = async () => {
      try {
        const provider = await getProvider();
        setProviderInstance(provider);
    
        const signer = provider.getSigner();
        const accounts = await provider.listAccounts(); // Update this line
        setAccounts(accounts);
    
        const healthcareContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        setContract(healthcareContract);
      } catch (error) {
        alert(
          `Failed to load provider, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    };
    

    init();
  }, []);
  useEffect(() => {
    if (providerInstance) {
      const onAccountsChanged = (accounts) => {
        setConnectedAccount(accounts[0]);
      };
  
      providerInstance.on("accountsChanged", onAccountsChanged);
  
      return () => {
        providerInstance.off("accountsChanged", onAccountsChanged);
      };
    }
  }, [providerInstance]);
  useEffect(() => {
    if (contract && connectedAccount && patientID) {
      const fetchPatientInfo = async () => {
        try {
          const patientInfo = await contract.getPatientInfo(patientID);
          setPatientInfo({
            name: patientInfo[0],
            dob: patientInfo[1],
            consentGiven: patientInfo[2],
          });
        } catch (error) {
          console.error("Error fetching patient info:", error);
        }
      };
  
      fetchPatientInfo();
    }
  }, [contract, connectedAccount, patientID]);
 
  useEffect(() => {
    if (contract && connectedAccount && patientID) {
      // ... fetchPatientInfo function
  
      const fetchMedicalRecords = async () => {
        try {
          const records = await contract.getMedicalRecords(patientID);
          setMedicalRecords(records);
        } catch (error) {
          console.error("Error fetching medical records:", error);
        }
      };
  
      fetchPatientInfo();
      fetchMedicalRecords();
    }
  }, [contract, connectedAccount, patientID]);
  async function fetchPatientInfo(contract, patientID) {
    const patientInfo = await contract.getPatientInfo(patientID);
    return {
      name: patientInfo[0],
      dob: patientInfo[1],
      consentGiven: patientInfo[2],
    };
  }
  useEffect(() => {
    async function fetchData() {
      if (!contract || !connectedAccount) return;
  
      const info = await fetchPatientInfo(contract, patientID);
      setPatientInfo(info);
    }
    fetchData();
  }, [contract, connectedAccount, patientID]);

  return (
    <div className="container">
      <CreatePatientForm contract={contract} account={accounts[0]} />
      <AddMedicalRecordForm contract={contract} account={accounts[0]} />
      <GiveConsentForm contract={contract} account={accounts[0]} />
      <GrantAccessForm contract={contract} account={accounts[0]} />
      <RevokeAccessForm contract={contract} account={accounts[0]} />
      <AddMedicationForm
        contract={contract}
        account={connectedAccount}
        patientID={patientID}
      />
      {connectedAccount && (
        <>
          <div className="patient-info">
            <h3>Patient Information</h3>
            <p>Name: {patientInfo.name}</p>
            <p>Date of Birth: {patientInfo.dob}</p>
            <p>Consent Given: {patientInfo.consentGiven ? "Yes" : "No"}</p>
            <h3>Medical Records</h3>
            <ul>
              {medicalRecords.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div className="text-fields-container">
        <input
          className="text-field"
          placeholder="Doctor's Address"
          value={connectedAccount}
          onChange={(e) => setConnectedAccount(e.target.value)}
        />
        <input
          className="text-field"
          placeholder="Patient ID"
          value={patientID}
          onChange={(e) => setPatientID(e.target.value)}
        />
      </div>
    </div>
  );
  
};

export default HealthcareContract;
