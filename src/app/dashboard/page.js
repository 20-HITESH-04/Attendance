"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'
import Card from './_components/Card'
import BarChartComponent from './_components/BarChartComponent';
import PieChartComponent from './_components/PieChartComponent';

function dashboard() {
  const { setTheme } = useTheme() ;
  useEffect(()=>{
    setTheme('system') ;
  },[]) ;
  return (
    <div className='p-4'>
      <div className='flex items-center justify-between mb-5'>
      <h2 className='font-bold text-2xl'>DashBoard</h2>
      <div className='flex items-center gap-4'>
      {/* Calendar Date Picker */}
      <div>
        <input
          type='date'
          className='p-2 border rounded'
        />
      </div>

      {/* Dropdown for Year Selection */}
      <div>
        <select
          className='p-2 border rounded'
        >
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>
    </div>
      </div>
      <div className='mb-8'>
      <Card/>
      </div>
      <div className='flex gap-8'>
      <BarChartComponent/>
      <PieChartComponent/>
      </div>
    </div>
  )
}

export default dashboard