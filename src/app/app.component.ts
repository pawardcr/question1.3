import { Component,ViewChild ,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'app'
    public gridApi
    public gridColumnApi
    //columnDefs:any
    //rowData:any
    columnDefs:any[] = [
        {headerName: 'No', field: 'num'},
        {headerName: 'Name', field: 'name'},
        {headerName: 'Occupation', field: 'occ'}
    ]
    rowData : any []= [
        {num: "1", name: "Prayut", occ: "Nut Seller"},
        {num: "2", name: "Pravit", occ:"Watch seller"},
        {num: "3", name: "Apirat", occ: "Actor"},
        {num: "4", name: "Thammanat", occ: "Pharmacist"}
    ]
    
    constructor(){
        console.log(onselectionchange)
        
    }
    /*selectedRow;
    onSelect(Hero){
        this.selectedRow = this.rowData;
    }*/
    
    onSelectionChanged() {
        var selectedNum = this.gridApi.getSelectedRows();
        selectedNum = selectedNum.length === 1 ? selectedNum[0].num : '';
    }
    CellClickedEvent (){
        var onclick = this.gridApi.onCellClicked();
    }
    ngOnInit(){

    }
}
