import { Component,ViewChild ,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { RowNode } from 'ag-grid-community';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent{
    @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;

    title = 'app'
    public gridApi
    public gridOptions
    public getRowNodeId
    selectedNum:any
    selectedName:any
    selectedJob:any
    selectedAll:any
    selectednode :any
    
    //checkbox
    isChecked : boolean = true;
    //file
    file : File = null
    file_name : any
    file_size :any
    
    //public rowSelection
    //public gridColumnApi
    //columnDefs:any
    //rowData:any
    
    add_name :any
    
    columnDefs = [
        {headerName: 'No', field: 'num'},
        {headerName: 'Name', field: 'name'},
        {headerName: 'Occupation', field: 'occ'},
        {headerName: 'Birthdate',field:'dob'},
        {headerName: 'Address',field: 'add'},
        {headerName: 'P.S',field:'ps'},
        {headerName: 'File Name',field:'fname'},
        {headerName: 'File Size',field:'fsize'}

    ]
    //,dob:" ",add:" ",ps:" ",fname:" ",fsize: " "
    name1
    name2
    name3
    name4
    rowData = [
        {num: "1", name: "Prayut", occ: "Nut Seller"},
        {num: "2", name: "Pravit", occ:"Watch seller"},
        {num: "3", name: "Apirat", occ: "Actor"},
        {num: "4", name: "Thammanat", occ: "Pharmacist"}
    ]
    rowSelection = 'single'
    constructor(){
     
    }
    /*selectedRow;
    onSelect(Hero){
        this.selectedRow = this.rowData;
    }*/
    
    onSelectionChanged() {
        /*this.selectedNum = this.agGrid.api.getSelectedRows();
        this.selectedNum = this.selectedNum.length === 1 ? this.selectedNum[0].num : '';
        
        this.selectedName = this.agGrid.api.getSelectedRows();
        this.selectedName = this.selectedNum.length === 1 ? this.selectedName[0].name : '';

        this.selectedJob = this.agGrid.api.getSelectedRows();
        this.selectedJob = this.selectedJob.length === 1 ? this.selectedJob[0].occ : '';*/
        
        this.selectedAll = this.agGrid.api.getSelectedRows();
        this.selectedAll = this.selectedAll.length === 1 ? this.selectedAll[0] : '';
        //console.log(this.agGrid.api.getSelectedRows())
    }
    regist(){
        
        this.add_name = this.selectedAll.name    
        this.rowData = [
            {num: "1", name: "Prayut", occ: "Nut Seller"},
            {num: "2", name: "Pravit", occ:"Watch seller"},
            {num: "3", name: "Apirat", occ: "Actor"},
            {num: "4", name: "Thammanat", occ: "Pharmacist"}
        ]
       
    }
    ngOnInit(){

    }
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
        
    }
}