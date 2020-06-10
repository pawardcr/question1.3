import { Component,ViewChild ,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
//import { type } from 'os';

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
    isChecked : boolean = true;
    file : File = null
    file_name : any
    file_size :any
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
    file_check(files){
        this.file = files.item(0)
        this.file_name = this.file.name
        let x  = this.file.size
        let n1 = Math.round((x / 1024));
        this.file_size = n1+'KB'
        console.log(n1)
    }

    check_btn(){
        if (this.isChecked == false) 
        {
            this.isChecked = true;
        } else 
        {
            this.isChecked = false;
        }
        /*if(this.status) {
            document.getElementById('birth').removeAttribute("disabled")
            document.getElementById('add').removeAttribute("disabled")
            document.getElementById('ps').removeAttribute("disabled")
        }
        else{
            document.getElementById('birth').setAttribute("disabled","false");
            document.getElementById('add').setAttribute("disabled","falsed");
            document.getElementById('ps').setAttribute("disabled","falsed");
        
        } */   
    }
}