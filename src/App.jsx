import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import mdData from './data/md/combined_data.json'
import doData from './data/do/combined_data.json'
import numberData from './data/combined_numbers/combined_data.json'
import data2020 from './data/numbers_jsons/2020.json'
import data2021 from './data/numbers_jsons/2021.json'
import data2022 from './data/numbers_jsons/2022.json'
import data2023 from './data/numbers_jsons/2023.json'


//new data
import longtermDo2004 from './data/lastdatatoadd/do/2004.json';
import longtermDo2005 from './data/lastdatatoadd/do/2005.json';
import longtermDo2006 from './data/lastdatatoadd/do/2006.json';
import longtermDo2007 from './data/lastdatatoadd/do/2007.json';
import longtermDo2008 from './data/lastdatatoadd/do/2008.json';
import longtermDo2009 from './data/lastdatatoadd/do/2009.json';
import longtermDo2010 from './data/lastdatatoadd/do/2010.json';
import longtermDo2011 from './data/lastdatatoadd/do/2011.json';
import longtermDo2012 from './data/lastdatatoadd/do/2012.json';
import longtermDo2013 from './data/lastdatatoadd/do/2013.json';
import longtermDo2014 from './data/lastdatatoadd/do/2014.json';
import longtermDo2015 from './data/lastdatatoadd/do/2015.json';
import longtermDo2016 from './data/lastdatatoadd/do/2016.json';
import longtermDo2017 from './data/lastdatatoadd/do/2017.json';
import longtermDo2018 from './data/lastdatatoadd/do/2018.json';
import longtermDo2019 from './data/lastdatatoadd/do/2019.json';
import longtermDo2020 from './data/lastdatatoadd/do/2020.json';
import longtermDo2021 from './data/lastdatatoadd/do/2021.json';
import longtermDo2022 from './data/lastdatatoadd/do/2022.json';
import longtermDo2023 from './data/lastdatatoadd/do/2023.json';


import longtermMd2004 from './data/lastdatatoadd/md/2004.json';
import longtermMd2005 from './data/lastdatatoadd/md/2005.json';
import longtermMd2006 from './data/lastdatatoadd/md/2006.json';
import longtermMd2007 from './data/lastdatatoadd/md/2007.json';
import longtermMd2008 from './data/lastdatatoadd/md/2008.json';
import longtermMd2009 from './data/lastdatatoadd/md/2009.json';
import longtermMd2010 from './data/lastdatatoadd/md/2010.json';
import longtermMd2011 from './data/lastdatatoadd/md/2011.json';
import longtermMd2012 from './data/lastdatatoadd/md/2012.json';
import longtermMd2013 from './data/lastdatatoadd/md/2013.json';
import longtermMd2014 from './data/lastdatatoadd/md/2014.json';
import longtermMd2015 from './data/lastdatatoadd/md/2015.json';
import longtermMd2016 from './data/lastdatatoadd/md/2016.json';
import longtermMd2017 from './data/lastdatatoadd/md/2017.json';
import longtermMd2018 from './data/lastdatatoadd/md/2018.json';
import longtermMd2019 from './data/lastdatatoadd/md/2019.json';
import longtermMd2020 from './data/lastdatatoadd/md/2020.json';
import longtermMd2021 from './data/lastdatatoadd/md/2021.json';
import longtermMd2022 from './data/lastdatatoadd/md/2022.json';
import longtermMd2023 from './data/lastdatatoadd/md/2023.json';

//end of new data

import { Card, Metric, Text } from "@tremor/react";
import { LineChart } from '@tremor/react';


function App() {
  const [count, setCount] = useState(0)

  const [selectedSpecialty, setSelectedSpecialty] = useState('Total PGY-1');
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedSpecialtyChart, setSelectedSpecialtyChart] = useState('Total PGY-1');
  const [selectedSpecialtyChartQuestion, setSelectedSpecialtyChartQuestion] = useState('Matched MDs');
  const [selectedLongtermChart, setSelectedLongtermChart] = useState('Anesthesiology');

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleSpecialtyChartChange = (event) => {
    setSelectedSpecialtyChart(event.target.value);
  };

  const handleSpecialtyChartQuestionChange = (event) => {
    setSelectedSpecialtyChartQuestion(event.target.value);
  };

  const handleLongtermChange = (event) => {
    setSelectedLongtermChart(event.target.value);
  };

  const combinedNumberData = [];
  combinedNumberData.push(data2020);
  combinedNumberData.push(data2021);
  combinedNumberData.push(data2022);
  combinedNumberData.push(data2023);

  const combinedLastDOData = [];
  combinedLastDOData.push(longtermDo2004);
  combinedLastDOData.push(longtermDo2005);
  combinedLastDOData.push(longtermDo2006);
  combinedLastDOData.push(longtermDo2007);
  combinedLastDOData.push(longtermDo2008);
  combinedLastDOData.push(longtermDo2009);
  combinedLastDOData.push(longtermDo2010);
  combinedLastDOData.push(longtermDo2011);
  combinedLastDOData.push(longtermDo2012);
  combinedLastDOData.push(longtermDo2013);
  combinedLastDOData.push(longtermDo2014);
  combinedLastDOData.push(longtermDo2015);
  combinedLastDOData.push(longtermDo2016);
  combinedLastDOData.push(longtermDo2017);
  combinedLastDOData.push(longtermDo2018);
  combinedLastDOData.push(longtermDo2019);
  combinedLastDOData.push(longtermDo2020);
  combinedLastDOData.push(longtermDo2021);
  combinedLastDOData.push(longtermDo2022);
  combinedLastDOData.push(longtermDo2023);

  const combinedLastMdData = [];
  combinedLastMdData.push(longtermMd2004);
  combinedLastMdData.push(longtermMd2005);
  combinedLastMdData.push(longtermMd2006);
  combinedLastMdData.push(longtermMd2007);
  combinedLastMdData.push(longtermMd2008);
  combinedLastMdData.push(longtermMd2009);
  combinedLastMdData.push(longtermMd2010);
  combinedLastMdData.push(longtermMd2011);
  combinedLastMdData.push(longtermMd2012);
  combinedLastMdData.push(longtermMd2013);
  combinedLastMdData.push(longtermMd2014);
  combinedLastMdData.push(longtermMd2015);
  combinedLastMdData.push(longtermMd2016);
  combinedLastMdData.push(longtermMd2017);
  combinedLastMdData.push(longtermMd2018);
  combinedLastMdData.push(longtermMd2019);
  combinedLastMdData.push(longtermMd2020);
  combinedLastMdData.push(longtermMd2021);
  combinedLastMdData.push(longtermMd2022);
  combinedLastMdData.push(longtermMd2023);

  {console.log(combinedLastMdData)}
  




  return (
    <div>
      <div className="grid grid-cols-3 gap-12">
        <div>
        <h2 className="text-2xl font-bold mb-6">Select Medical Specialty and Year</h2>
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
          
          <select value={selectedYear} onChange={handleYearChange} className="mb-6">
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
            <option value={2020}>2020</option>
            
          </select>
        
          <Card className="mx-auto max-w-xs mb-6" decoration="top" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total Residency Spots Available</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{mdData[selectedYear][selectedSpecialty].Positions_Offered}</p>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">MD</h2>
          <Card className="mx-auto max-w-xs mb-6" decoration="top" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Applicants in {selectedSpecialty}</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{mdData[selectedYear][selectedSpecialty].No_of_Applicants}</p>
          </Card>
          <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Percentage of Positions Filled by Senior MDs in {selectedSpecialty}</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{mdData[selectedYear][selectedSpecialty].Percentage_Filled}%</p>
          </Card>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">DO</h2>
          <Card className="mx-auto max-w-xs mb-6" decoration="top" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Applicants in {selectedSpecialty}</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{doData[selectedYear][selectedSpecialty].No_of_Applicants}</p>
          </Card>
          <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">2024 Percentage of Positions Filled by Senior DOs in {selectedSpecialty}</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{doData[selectedYear][selectedSpecialty].Percentage_Filled}%</p>
          </Card>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">MD VS DO Match and Unmatched Rates By Year</h2>
      <div className="grid grid-cols-2 gap-12">
        <h4 className="text-2xl font-bold mb-6">Select Medical Specialty</h4>
            <select value={selectedSpecialtyChart} onChange={handleSpecialtyChartChange} className="mb-6">
              <option value="Anesthesiology">Anesthesiology</option>
              <option value="Child Neurology">Child Neurology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Emergency Medicine">Emergency Medicine</option>
              <option value="Family Medicine">Family Medicine</option>
              <option value="Internal Medicine">Internal Medicine</option>
              <option value="Internal Medicine (Prelim)">Internal Medicine (Prelim)</option>
              <option value="Internal Medicine/Emergency Medicine">Internal Medicine/Emergency Medicine</option>
              <option value="Internal Medicine/Pediatrics">Internal Medicine/Pediatrics</option>
              <option value="Internal Medicine/Psychiatry">Internal Medicine/Psychiatry</option>
              <option value="Interventional Radiology">Interventional Radiology</option>
              <option value="Neurological Surgery">Neurological Surgery</option>
              <option value="Neurology">Neurology</option>
              <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
              <option value="Orthopaedic Surgery">Orthopaedic Surgery</option>
              <option value="Osteo Neuromusculoskeletal Medicine">Osteo Neuromusculoskeletal Medicine</option>
              <option value="Otolaryngology">Otolaryngology</option>
              <option value="Pathology-Anatomic and Clinical">Pathology-Anatomic and Clinical</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Pediatrics (Prelim)">Pediatrics (Prelim)</option>
              <option value="Pediatrics/Medical Genetics">Pediatrics/Medical Genetics</option>
              <option value="Pediatrics/Psychiatry/Child and Adolescent Psychiatry">Pediatrics/Psychiatry/Child and Adolescent Psychiatry</option>
              <option value="Physical Medicine and Rehabilitation">Physical Medicine and Rehabilitation</option>
              <option value="Plastic Surgery">Plastic Surgery</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Radiation Oncology">Radiation Oncology</option>
              <option value="Radiology-Diagnostic">Radiology-Diagnostic</option>
              <option value="Surgery-General">Surgery-General</option>
              <option value="Surgery-General (Prelim)">Surgery-General (Prelim)</option>
              <option value="Thoracic Surgery">Thoracic Surgery</option>
              <option value="Vascular Surgery">Vascular Surgery</option>
              <option value="Total PGY-1">Total PGY-1</option>
            </select>
 
        <LineChart
          className="mt-4 h-72"
          data={combinedNumberData}
          index="Year"
          yAxisWidth={65}
          categories={[`${selectedSpecialtyChart}.Matched MDs`,`${selectedSpecialtyChart}.Unmatched MDs`,`${selectedSpecialtyChart}.Total MDs`]}
          colors={['indigo','orange','cyan']}
          
        />
        <LineChart
          className="mt-4 h-72"
          data={combinedNumberData}
          index="Year"
          yAxisWidth={65}
          categories={[`${selectedSpecialtyChart}.Matched DOs`,`${selectedSpecialtyChart}.Unmatched DOs`,`${selectedSpecialtyChart}.Total DOs`]}
          colors={['indigo','orange','cyan']}
        />
      </div>

      <h2 className="text-2xl font-bold mb-6">Longterm MD VS DO Total Matches</h2>
      <div className="grid grid-cols-2 gap-12">
        <h4 className="text-2xl font-bold mb-6">Select Medical Specialty</h4>
            <select value={selectedLongtermChart} onChange={handleLongtermChange} className="mb-6">
              <option value="Anesthesiology">Anesthesiology</option>
              <option value="Child Neurology">Child Neurology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Emergency Medicine">Emergency Medicine</option>
              <option value="Family Medicine">Family Medicine</option>
              <option value="Internal Medicine">Internal Medicine</option>
              <option value="Internal Medicine (Prelim)">Internal Medicine (Prelim)</option>
              <option value="Internal Medicine/Emergency Medicine">Internal Medicine/Emergency Medicine</option>
              <option value="Internal Medicine/Pediatrics">Internal Medicine/Pediatrics</option>
              <option value="Internal Medicine/Psychiatry">Internal Medicine/Psychiatry</option>
              <option value="Interventional Radiology">Interventional Radiology</option>
              <option value="Neurological Surgery">Neurological Surgery</option>
              <option value="Neurology">Neurology</option>
              <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
              <option value="Orthopaedic Surgery">Orthopaedic Surgery</option>
              <option value="Osteo Neuromusculoskeletal Medicine">Osteo Neuromusculoskeletal Medicine</option>
              <option value="Otolaryngology">Otolaryngology</option>
              <option value="Pathology-Anatomic and Clinical">Pathology-Anatomic and Clinical</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Pediatrics (Prelim)">Pediatrics (Prelim)</option>
              <option value="Pediatrics/Medical Genetics">Pediatrics/Medical Genetics</option>
              <option value="Pediatrics/Psychiatry/Child and Adolescent Psychiatry">Pediatrics/Psychiatry/Child and Adolescent Psychiatry</option>
              <option value="Physical Medicine and Rehabilitation">Physical Medicine and Rehabilitation</option>
              <option value="Plastic Surgery">Plastic Surgery</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Radiation Oncology">Radiation Oncology</option>
              <option value="Radiology-Diagnostic">Radiology-Diagnostic</option>
              <option value="Surgery-General">Surgery-General</option>
              <option value="Surgery-General (Prelim)">Surgery-General (Prelim)</option>
              <option value="Thoracic Surgery">Thoracic Surgery</option>
              <option value="Vascular Surgery">Vascular Surgery</option>
            </select>
 
        <LineChart
          className="mt-4 h-72"
          data={combinedLastMdData}
          index="year"
          yAxisWidth={65}
          categories={[`results.${selectedLongtermChart}.Percentage_of_Matches`]}
          colors={['indigo']}
          
        />
        <LineChart
          className="mt-4 h-72"
          data={combinedLastDOData}
          index="year"
          yAxisWidth={65}
          categories={[`${selectedLongtermChart}.Number_Matched`]}
          colors={['indigo']}
        />
      </div>
    </div>
    
    
  )
}

export default App
