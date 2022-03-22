import React, { useState, useEffect, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const SimpleTable = () => {
  
  // const [ rowData ] = useState([
  //   {make: "Toyota", model: "Celica", price: 35000},
  //   {make: "Ford", model: "Mondeo", price: 32000},
  //   {make: "Porche", model: "Boxter", price: 72000},
  // ]);
  const gridRef = useRef(null)
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
       fetch('https://www.ag-grid.com/example-assets/row-data.json')
       .then(result => result.json())
       .then(rowDataAPI => setRowData(rowDataAPI))
    }, []);

  const [ columnDefs ] = useState([
    {field: 'make', sortable: 'true'},
    {field: 'model', sortable: 'true'},
    {field: 'price', sortable: 'true'},
  ])

 const onButtonClick = e => {
    const selectedNodes = gridRef.current.api.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

  return( 
  <div className='ag-theme-alpine' style={{height: 400, width: 600}}> 
  <button onClick={onButtonClick}>Get selected rows</button>
    <AgGridReact 
      ref={gridRef}
      rowData = {rowData}
      columnDefs = {columnDefs} 
      rowSelection = "multiple">
    </AgGridReact>
  </div>

  )
}

export default SimpleTable
