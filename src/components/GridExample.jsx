'use strict';

import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from '../data/resultString.json'
// import data from '../data/csvjson.json'

const GridExample = () => {
  const containerStyle = useMemo(() => ({width: '100%', height: '100vh'}), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState([
    {name: 'CIVIL AIR PATROL INC', year_built: 1985, city: 'MAXWELL AFB', aircraft_model_code: '2072436', count: 61},
    {name: 'Some Airline', year_built: 2000, city: 'MAXWELL AFB', aircraft_model_code: '2072436', count: 61},
    {name: 'Some Other', year_built: 2022, city: 'MAXWELL AFB', aircraft_model_code: '2072436', count: 61},
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'Retailer country', enableRowGroup: true,  hide: true },
    { field: 'Province or State', enableRowGroup: true,  hide: true},
    { field: 'City', enableRowGroup: true, hide: true },
    // { field: 'Postal code', enableRowGroup: true, rowGroup: true, hide: true },
    // { field: 'Short postal code', enableRowGroup: true, rowGroup: true, hide: true },
    { field: 'Order method type', enableRowGroup: true, hide: true },
    { field: 'Retailer type', enableRowGroup: true, hide: true, enablePivot:true },
    { field: 'Retailer', enableRowGroup: true, hide: true , enablePivot:true},
    { field: 'Product line', enableRowGroup: true, rowGroup: true, hide: true, enablePivot:true },
    { field: 'Product type', enableRowGroup: true, rowGroup: true, hide: true, enablePivot:true },
    { field: 'Product', enableRowGroup: true, rowGroup: true, hide: true, enablePivot:true },
    { field: 'Product number', enableRowGroup: true, rowGroup: true, hide: true },
    { field: 'Year', enableRowGroup: true, hide: true, enablePivot:true },
    { field: 'Quarter', enableRowGroup: true, hide: true },
    { headerName: 'Quantity', field: 'Quantity', aggFunc: 'sum', hide: true, enableValue:true},
    { headerName: 'Revenue',field: 'Revenue', aggFunc: 'sum', valueFormatter: formatNumber, enableValue:true },
    { headerName: 'Planned Revenue',field: 'Planned revenue', aggFunc: 'sum' , valueFormatter: formatNumber, enableValue:true},
    { headerName: 'Gross Profit', field: 'Gross profit', aggFunc: 'sum' , valueFormatter: formatNumber, hide: true, enableValue:true},
    { headerName: 'Unit Cost',field: 'Unit cost', aggFunc: 'avg' , valueFormatter: formatNumber, hide: true, enableValue:true},
    { headerName: 'Unit Price',field: 'Unit price', aggFunc: 'avg', valueFormatter: formatNumber, hide: true , enableValue:true},
    { headerName: 'Unit Sale Price',field: 'Unit sale price', aggFunc: 'avg', valueFormatter: formatNumber, hide: true , enableValue:true},
  ]);  
  
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);
  const rowGroupPanelShow = 'always';

  function formatNumber(number){
    // parseInt(strNumber)
    return `$${parseFloat(number.value).toFixed(2)}`
  }

  // const onGridReady = useCallback((params) => {
  //   fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //     .then((resp) => resp.json())
  //     .then((data) => setRowData(data));
  // }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          animateRows={true}
          // onGridReady={onGridReady}
          rowGroupPanelShow={'always'}
          sideBar={true}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default GridExample