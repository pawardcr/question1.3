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
        {headerName: 'No', field: 'num'},
        {headerName: 'Name', field: 'name'},
        {headerName: 'Occupation', field: 'occ'}
      ];
    
    rowData = [
        {num: "1", name: "Prayut", occ: "Nut Seller"},
        {num: "2", name: "Pravit", occ:"Watch seller"},
        {num: "3", name: "Apirat", occ: "Actor"},
        {num: "4", name: "Thammanat", occ: "Pharmacist"}
      ];
      onSelectionChanged() {
        var selectedNum = this.gridApi.getSelectedRows();
        document.getElementById('#selectedNum').innerHTML = 
          selectedNum.length === 1 ? selectedNum[0].num : '';
        
      }
      
}
