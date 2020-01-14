import {Component, OnInit} from '@angular/core';

import {AllModules} from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'my-ag-grid-sample';
  columnDefs = [
    {headerName: 'Country', field: 'country', width: 120, rowGroup: true, suppressCount: true},
    {headerName: 'Year', field: 'year', width: 90, rowGroup: true},
    {headerName: 'Sport', field: 'sport', width: 110},
    {headerName: 'Athlete', field: 'athlete', width: 200},
    {headerName: 'Gold', field: 'gold', width: 100},
    {headerName: 'Silver', field: 'silver', width: 100},
    {headerName: 'Bronze', field: 'bronze', width: 100},
    {headerName: 'Total', field: 'total', width: 100},
    {headerName: 'Age', field: 'age', width: 90},
    {headerName: 'Date', field: 'date', width: 110}
  ];

  modules = AllModules;
  rowData = [];

  autoGroupColumnDef = {
    width: 200,
    cellRenderer: 'agGroupCellRenderer',
    suppressFilter: false,
    cellRendererParams: {
      suppressCount: true
    }
  };

  ngOnInit() {
    fetch('assets/sample.json')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }
}
