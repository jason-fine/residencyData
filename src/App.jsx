import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import mdData from './data/md/combined_data.json'
import doData from './data/do/combined_data.json'

import { Card, Metric, Text } from "@tremor/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold">MD</h2>
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total 2024 Applicants</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{mdData[2024]['Total PGY-1'].No_of_Applicants}</p>
        </Card>
      </div>
      <div>
        <h2 className="text-2xl font-bold">DO</h2>
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total 2024 Applicants</p>
          <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{doData[2024]['Total PGY-1'].No_of_Applicants}</p>
        </Card>
      </div>
    </div>
  )
}

export default App
