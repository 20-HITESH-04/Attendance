import React from 'react'
import AddNewStudent from './_components/AddNewStudent'
import StudentListTable from './_components/StudentListTable'

function Student() {
  return (
    <div className='p-7'>
        <h2 className='font-bold text-2xl flex items-center justify-between'>
          Students
            <AddNewStudent/>
        </h2>
        <StudentListTable/>
    </div>
  )
}

export default Student