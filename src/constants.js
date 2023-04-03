
export const CONTRACT_ADDRESS = "0xB0223c913Fa5b533EF3d415C37beBB16e6c29B0e";

export const CONTRACT_ABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "diagnosis",
				"type": "string"
			}
		],
		"name": "addDiagnosis",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medicalRecord",
				"type": "string"
			}
		],
		"name": "addMedicalRecord",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medication",
				"type": "string"
			}
		],
		"name": "addMedication",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "prescription",
				"type": "string"
			}
		],
		"name": "addPrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "appointmentID",
				"type": "uint256"
			}
		],
		"name": "confirmAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dob",
				"type": "string"
			}
		],
		"name": "createPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "appointmentID",
				"type": "uint256"
			}
		],
		"name": "getAppointment",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			}
		],
		"name": "getDiagnoses",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			}
		],
		"name": "getMedicalRecords",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			}
		],
		"name": "getPatientInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			}
		],
		"name": "giveConsent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "authorizedDoctor",
				"type": "address"
			}
		],
		"name": "grantAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "diagnosis",
				"type": "string"
			}
		],
		"name": "removeDiagnosis",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medication",
				"type": "string"
			}
		],
		"name": "removeMedication",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "prescription",
				"type": "string"
			}
		],
		"name": "removePrescription",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "authorizedDoctor",
				"type": "address"
			}
		],
		"name": "revokeAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			}
		],
		"name": "revokeConsent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"name": "scheduleAppointment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];