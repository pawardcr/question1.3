import { Component,ViewChild ,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'app'
    private gridApi
    private gridColumnApi
    columnDefs:any
    rowData:any
    constructor(){
        this.columnDefs = [
            {headerName: 'No', field: 'num'},
            {headerName: 'Name', field: 'name'},
            {headerName: 'Occupation', field: 'occ'}
        ]
        this.rowData = [
            {num: "1", name: "Prayut", occ: "Nut Seller"},
            {num: "2", name: "Pravit", occ:"Watch seller"},
            {num: "3", name: "Apirat", occ: "Actor"},
            {num: "4", name: "Thammanat", occ: "Pharmacist"}
        ]
    
    
        console.log(this.rowData[0].num)
        
    }
    
    //onSelectionChanged() {
      //  var selectedNum = this.gridApi.getSelectedRows();
       // document.querySelector('#selectedNum').innerHTML = selectedNum.length === 1 ? selectedNum[0].num : '';
    //}
    CellClickedEvent (){
        var onclick = this.gridApi.onCellClicked();
    }
    //onRowClicked(event: any) { console.log('row', event); }
    //onCellClicked(event: any) { console.log('cell', event); }
    //onSelectionChanged(event: any) { console.log("selection", event); }
}
