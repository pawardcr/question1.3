import { Component,ViewChild ,Input} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { FormupdateComponent } from './formupdate/formupdate.component';
import { RowNode } from 'ag-grid-community';
import { Person } from './data';
import {PERSONS } from './data-person';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent{
    @ViewChild("agGrid",{static: false})agGrid : AgGridAngular;

    title = 'app'
    public gridApi
    //public gridOptions
    public getRowNodeId
    public gridColumnApi
    selectedNum:any
    selectedName:any
    selectedJob:any
    selectedAll:any
    selectednode :any
    checkgrid :boolean
    //checkbox
    isChecked : boolean = true;
    //file
    file : File = null
    file_name : any
    file_size :any
    

    
    add_name :any
    add_num : any
    add_occ : any
    add_birth :any
    add_adr :any
    add_ps :any
    add_fname: any
    add_fsize:any
    defaultColDef = { 
        resizable: true ,
        width: 100,};
    columnDefs = [
        {headerName: 'No', field: 'num',width:70,resizable: false},
        {headerName: 'Name', field: 'name'},
        {headerName: 'Occupation', field: 'occ'},
        {headerName: 'Birthdate',field:'dob'},
        {headerName: 'Address',field: 'add'},
        {headerName: 'P.S',field:'ps'},
        {headerName: 'File Name',field:'fname'},
        {headerName: 'File Size',field:'fsize'}

    ]
    //,dob:" ",add:" ",ps:" ",fname:" ",fsize: " "
    
    rowData = [
        {num: 1, name: "Prayut", occ: "Nut Seller",dob:" ",add:" ",ps:" ",fname:" ",fsize: " "},
        {num: 2, name: "Pravit", occ:"Watch seller",dob:" ",add:" ",ps:" ",fname:" ",fsize: " "},
        {num: 3, name: "Apirat", occ: "Actor",dob:" ",add:" ",ps:" ",fname:" ",fsize: " "},
        {num: 4, name: "Thammanat", occ: "Pharmacist",dob:" ",add:" ",ps:" ",fname:" ",fsize: " "}
    ]
    rowSelection='single'
    
    gridOptions = { 
        getRowNodeId :function(data) {
            
            return data.num
        }
        
    }   
    constructor(){  
    }
    onSelectionChanged() {
        /*this.selectedNum = this.agGrid.api.getSelectedRows();
        this.selectedNum = this.selectedNum.length === 1 ? this.selectedNum[0].num : '';
        this.selectedName = this.agGrid.api.getSelectedRows();
        this.selectedName = this.selectedNum.length === 1 ? this.selectedName[0].name : '';
        this.selectedJob = this.agGrid.api.getSelectedRows();
        this.selectedJob = this.selectedJob.length === 1 ? this.selectedJob[0].occ : '';*/
        
        this.selectedAll = this.gridApi.getSelectedRows();
        this.selectedAll = this.selectedAll.length === 1 ? this.selectedAll[0] : '';
        //console.log(this.selectedAll.num)
        //this.checkgrid = false
       
        
    }
    
    regist(){
        this.add_name = this.selectedAll.name
        this.add_num = this.selectedAll.num
        this.add_occ = this.selectedAll.occ
        this.add_birth =this.selectedAll.dob
        this.add_adr = this.selectedAll.add
        this.add_ps = this.selectedAll.ps
        
        var rowNode = this.gridApi.getRowNode(this.selectedAll.num-1)
        console.log(rowNode)
        var newData = {
            num:this.add_num,
            name:this.add_name,
            occ : this.add_occ,
            dob:this.add_birth,
            add:this.add_adr,
            ps:this.add_ps,
            fname:this.file_name,
            fsize:this.file_size
        };
        rowNode.updateData(newData)
        /*this.add_name = this.selectedAll.name
        var rowNode = this.gridApi.getRowNode(this.selectedAll.num);
        alert("param ที่ถูกส่งเข้ามา : "+ this.selectedAll.num + " . แถวที่กำลังจะถูกเปลี่ยน : " + rowNode.data.name);*/
        this.selectedAll = ''
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    ngOnInit(){

    }
    file_check(files){
        this.file = files.item(0)
        this.file_name = this.file.name
        let x  = this.file.size
        let n1 = Math.round((x / 1024));
        this.file_size = n1+'KB'
        //console.log(n1)
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