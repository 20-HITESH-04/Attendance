"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';

function AddNewStudent() {
  const [open,setOpen] = useState(false) ;
  return (
    <div>
        <Button onClick={()=>setOpen(true)} className='mb-4'>
            + Add new Student
        </Button>
        <Dialog open={open}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add New Student</DialogTitle>
      <DialogDescription>
        <div className='py-2'>
          <label>Full Name</label>
          <Input placeholder='Ex. Hitesh Lalitkumar Oroskar'/>
        </div>
        <div className='py-2'>
          <label>Contact Number</label>
          <Input placeholder='Ex. 1234567890'/>
        </div>
        <div className='py-2'>
          <label>Address</label>
          <Input placeholder='Ex. Dadar'/>
        </div>
        <div className='flex flex-col py-2'>
          <label>Select Current Year</label>
          <select className='p-3 border rounded-lg'>
            <option value={0}>Select Option</option>
            <option value={1}>First Year</option>
            <option value={2}>Second Year</option>
            <option value={3}>Third Year</option>
            <option value={4}>Fourth Year</option>
          </select>
        </div>
        <div className='flex gap-3 items-center justify-end mt-5'>
          <Button onClick={()=>setOpen(false)} variant="ghost">Cancel</Button>
          <Button>Save</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddNewStudent