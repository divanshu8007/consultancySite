import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import DateEditor from './DateEditor'; // Import the DateEditor component
import { ColDef } from 'ag-grid-community';

// Define a custom ColDef type that extends ColDef
interface CustomColDef extends ColDef {
  cellEditorFramework?: React.ComponentType<any>;
}

const columnDefs: CustomColDef[] = [
  { headerName: 'Date', field: 'date', editable: true, cellEditorFramework: DateEditor },
  { headerName: 'Value', field: 'value' }
];

const rowData = [
  { date: new Date('2024-02-07'), value: 10 },
  { date: new Date('2024-02-08'), value: 20 },
  { date: new Date('2024-02-09'), value: 30 }
];

const GridExample = () => {
  const defaultColDef = {
    editable: true,
    singleClickEdit: true // Start editing immediately on single click
  };
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default GridExample;
