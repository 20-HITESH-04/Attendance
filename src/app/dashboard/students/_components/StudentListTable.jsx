"use client"
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

function StudentListTable() {
    const CustomButtons=(props)=>{
        return <Button variant="destructive"><Trash/></Button>
    }
  const [colDefs, setColDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "address", filter: true },
    { field: "contact", filter: true },
    {field:'delete',cellRenderer:CustomButtons}
  ]);
  const [rowData, setRowData] = useState([
    { id: 1, name: "Hitesh Lalitkumar Oroskar", address: "Dadar", contact: "1234567890" },
    { id: 2, name: "John Doe", address: "Bandra", contact: "9876543210" },
    { id: 3, name: "Jane Smith", address: "Andheri", contact: "1122334455" },
    { id: 4, name: "Mary Johnson", address: "Borivali", contact: "5566778899" },
    { id: 5, name: "James Brown", address: "Malad", contact: "9988776655" },
  ]);
  return (
    <div>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
}

export default StudentListTable;
