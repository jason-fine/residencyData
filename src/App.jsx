import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import mdData from './data/md/combined_data.json'
import doData from './data/do/combined_data.json'

import { Card, Metric, Text } from "@tremor/react";

function App() {
  const [count, setCount] = useState(0)

  const [selectedSpecialty, setSelectedSpecialty] = useState('Total PGY-1');

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
  };


  return (
    <div className="grid grid-cols-3 gap-12">
      <div>
      <h2 className="text-2xl font-bold mb-6">Select Medical Specialty</h2>
        <select value={selectedSpecialty} onChange={handleSpecialtyChange} className="mb-6">
          <option value="Anesthesiology">Anesthesiology</option>
          <option value="Child Neurology">Child Neurology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Emergency Medicine">Emergency Medicine</option>
          <option value="Emergency Med-Anesthesiology">Emergency Med-Anesthesiology</option>
          <option value="Emergency Med-Family Med">Emergency Med-Family Med</option>
          <option value="Family Medicine">Family Medicine</option>
          <option value="Family Med-Preventive Med">Family Med-Preventive Med</option>
          <option value="Internal Medicine (Categorical)">Internal Medicine (Categorical)</option>
          <option value="Medicine-Anesthesiology">Medicine-Anesthesiology</option>
          <option value="Medicine-Dermatology">Medicine-Dermatology</option>
          <option value="Medicine-Emergency Med">Medicine-Emergency Med</option>
          <option value="Medicine-Medical Genetics">Medicine-Medical Genetics</option>
          <option value="Medicine-Pediatrics">Medicine-Pediatrics</option>
          <option value="Medicine-Preliminary (PGY-1 Only)">Medicine-Preliminary (PGY-1 Only)</option>
          <option value="Medicine-Preventive Med">Medicine-Preventive Med</option>
          <option value="Medicine-Primary">Medicine-Primary</option>
          <option value="Medicine-Psychiatry">Medicine-Psychiatry</option>
          <option value="Interventional Radiology (Integrated)">Interventional Radiology (Integrated)</option>
          <option value="Neurodevelopmental Disabilities">Neurodevelopmental Disabilities</option>
          <option value="Neurological Surgery">Neurological Surgery</option>
          <option value="Neurology">Neurology</option>
          <option value="Obstetrics-Gynecology">Obstetrics-Gynecology</option>
          <option value="OB/GYN-Preliminary (PGY-1 Only)">OB/GYN-Preliminary (PGY-1 Only)</option>
          <option value="Orthopedic Surgery">Orthopedic Surgery</option>
          <option value="Osteo Neuromusculoskeletal Med">Osteo Neuromusculoskeletal Med</option>
          <option value="Otolaryngology">Otolaryngology</option>
          <option value="Pathology">Pathology</option>
          <option value="Pediatrics (Categorical)">Pediatrics (Categorical)</option>
          <option value="Pediatrics-Anesthesiology">Pediatrics-Anesthesiology</option>
          <option value="Pediatrics-Emergency Med">Pediatrics-Emergency Med</option>
          <option value="Pediatrics-Medical Genetics">Pediatrics-Medical Genetics</option>
          <option value="Pediatrics-P M & R">Pediatrics-P M & R</option>
          <option value="Pediatrics-Preliminary">Pediatrics-Preliminary</option>
          <option value="Pediatrics-Primary">Pediatrics-Primary</option>
          <option value="Peds/Psych/Child Psych">Peds/Psych/Child Psych</option>
          <option value="Physical Medicine & Rehab">Physical Medicine & Rehab</option>
          <option value="Plastic Surgery (Integrated)">Plastic Surgery (Integrated)</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Psychiatry-Family Medicine">Psychiatry-Family Medicine</option>
          <option value="Psychiatry-Neurology">Psychiatry-Neurology</option>
          <option value="Radiation Oncology">Radiation Oncology</option>
          <option value="Radiology-Diagnostic">Radiology-Diagnostic</option>
          <option value="Surgery (Categorical)">Surgery (Categorical)</option>
          <option value="Surgery-Preliminary (PGY-1 Only)">Surgery-Preliminary (PGY-1 Only)</option>
          <option value="Thoracic Surgery">Thoracic Surgery</option>
          <option value="Transitional (PGY-1 Only)">Transitional (PGY-1 Only)</option>
          <option value="Vascular Surgery">Vascular Surgery</option>
          <option value="Total PGY-1">Total PGY-1</option>
        </select>
        <Card className="mx-auto max-w-xs mb-6" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total Residency Spots Available</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{mdData[2024][selectedSpecialty].Positions_Offered}</p>
        </Card>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">MD</h2>
        <Card className="mx-auto max-w-xs mb-6" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Applicants in {selectedSpecialty}</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{mdData[2024][selectedSpecialty].No_of_Applicants}</p>
        </Card>
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Percentage of Positions Filled by Senior MDs in {selectedSpecialty}</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{mdData[2024][selectedSpecialty].Percentage_Filled}%</p>
        </Card>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">DO</h2>
        <Card className="mx-auto max-w-xs mb-6" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Applicants in {selectedSpecialty}</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{doData[2024][selectedSpecialty].No_of_Applicants}</p>
        </Card>
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Percentage of Positions Filled by Senior DOs in {selectedSpecialty}</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{doData[2024][selectedSpecialty].Percentage_Filled}%</p>
        </Card>
      </div>
    </div>
  )
}

export default App
