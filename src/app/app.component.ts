import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private gridApi;
    private gridColumnApi;
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
        document.querySelector('#selectedNum').innerHTML = selectedNum.length === 1 ? selectedNum[0].num : '';
    }
    CellClickedEvent (){
        var onclick = this.gridApi.onCellClicked();

    }
    
    //onRowClicked(event: any) { console.log('row', event); }
    //onCellClicked(event: any) { console.log('cell', event); }
    //onSelectionChanged(event: any) { console.log("selection", event); }
}