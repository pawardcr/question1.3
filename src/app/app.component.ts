import { Component,ViewChild ,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;
    
    title = 'app'
    public gridApi
    selectedNum:any
    selectedName:any
    selectedJob:any
    //check1:boolean = true;
    //public rowSelection
    //public gridColumnApi
    //columnDefs:any
    //rowData:any
    columnDefs = [
        {headerName: 'No', field: 'num'},
        {headerName: 'Name', field: 'name'},
        {headerName: 'Occupation', field: 'occ'}
    ]
    rowData = [
        {num: "1", name: "Prayut", occ: "Nut Seller"},
        {num: "2", name: "Pravit", occ:"Watch seller"},
        {num: "3", name: "Apirat", occ: "Actor"},
        {num: "4", name: "Thammanat", occ: "Pharmacist"}
    ]
    rowSelection = 'single'
    constructor(){
        /*for(let row of this.rowData){
            console.log(JSON.stringify(row.num))
        }*/
    }
    /*selectedRow;
    onSelect(Hero){
        this.selectedRow = this.rowData;
    }*/
    
    onSelectionChanged() {
        this.selectedNum = this.agGrid.api.getSelectedRows();
        this.selectedNum = this.selectedNum.length === 1 ? this.selectedNum[0].num : '';

        this.selectedName = this.agGrid.api.getSelectedRows();
        this.selectedName = this.selectedNum.length === 1 ? this.selectedName[0].name : '';

        this.selectedJob = this.agGrid.api.getSelectedRows();
        this.selectedJob = this.selectedJob.length === 1 ? this.selectedJob[0].occ : '';
        //console.log(this.selectedNum)
    }

    ngOnInit(){

    }
    /*getSelectedRows(){
        const selectedNodes = this.agGrid.api.getSelectedRows()
        const selectedData = selectedNodes.map(node=> node.data)
        const selectedDataStringPresentation = selectedData
        .map(node => node.make+" "+node.model).join(",")
        alert(`Selected Nodes :${selectedDataStringPresentation}`)
        console.log(selectedDataStringPresentation)
        
    }*/
    
    check(check1:Boolean){
        
        if(check1 == true) {
            document.getElementById('birth').setAttribute("disabled","falsed");
            document.getElementById('add').setAttribute("disabled","falsed");
            document.getElementById('ps').setAttribute("disabled","falsed");
        
        }
        if(check1 != true){
            document.getElementById('birth').removeAttribute('disabled')
            document.getElementById('add').removeAttribute("disabled")
            document.getElementById('ps').removeAttribute("disabled")
            
        }
        
    }
}