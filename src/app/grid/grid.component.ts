import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  constructor() { }

  ngOnInit() {
  }
  title = 'app';

    columnDefs = [
        {headerName: 'No', field: 'num', sortable: true},
        {headerName: 'Name', field: 'name', sortable: true},
        {headerName: 'Occupation', field: 'occ', sortable: true}
      ];
    
    rowData = [
        {num: "1", name: "Prayut", occ: "Nut Seller"},
        {num: "2", name: "Pravit", occ:"Watch seller"},
        {num: "3", name: "Apirat", occ: "Actor"},
        {num: "4", name: "Thammanat", occ: "Pharmacist"}
      ];
      onSelectionChanged() {
        var selectedNum = this.gridApi.getSelectedRows();
        document.querySelector('#selectedNum').innerHTML =
          selectedNum.length === 1 ? selectedNum[0].num : '';
        var selectedName = this.gridApi.getSelectedRows();
        document.querySelector('#selectedName').innerHTML =
          selectedName.length === 1 ? selectedName[0].name : '';
      }
      onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    
        
      }
}
