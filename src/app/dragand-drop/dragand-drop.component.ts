import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgModel } from '@angular/forms';
import { isNumber } from 'util';

@Component({
  selector: 'app-dragand-drop',
  templateUrl: './dragand-drop.component.html',
  styleUrls: ['./dragand-drop.component.scss']
})
export class DragandDropComponent implements OnInit {
  ngOnInit() {
  }
  Allmenu = ["Coffee","Tea","Water","Beer"]
  Allprice = [150,140,120,360]

  menu = new Array<string>(3)
  //menu: string[]
  price = new Array<number>(3)
  count = [0,0,0,0]
  //total = new Array<number>(3)
  total:number[] =[0,0,0,0]
  //sum:number=0
  coco = 5
  koko = 1
  coffee =["Coffee",150]
  tea=[2,"Tea",140]
  water =[3,"Water",120]
  beer = [4,"Beer" ,360]
  c1:boolean
  c2:boolean
  c3:boolean
  c4:boolean
  event:any
  HideBtn:boolean = false
  constructor(){
  }
  createrow(){
    //var table: HTMLTableElement = <HTMLTableElement> document.getElementById("myTable");
  }
  allowDrop(event) {
    event.preventDefault();
  }
  drag(event){
    event.dataTransfer.setData("text", event.target.id);
  }
  updown(){
    //var input1 = parseInt((<HTMLInputElement>document.getElementById('n1')).value)
    if(this.c1 == true){
      this.count[0] +1
      this.total[0] = (this.Allprice[0] * this.count[0])
    }
    if(this.c2 == true){
      this.count[0] +1
      this.total[1] = (this.Allprice[1] * this.count[1])
    }
    if(this.c3 == true){
      this.count[0] +1
      this.total[2] = (this.Allprice[2] * this.count[2])
    }
    if(this.c4 == true){
      this.count[0] +1
      this.total[3] = (this.Allprice[3] * this.count[3])
    }
  }
  drop(event){
    event.preventDefault()
    let data = event.dataTransfer.getData('text');
    /*var table = <HTMLTableElement> document.getElementById("table1");
    for(var i=0;rows <10;i++){
      var rows = i
    }
    // add row 
    //var row = table.insertRow(0)
    // add input in cell
    var inputText1 = document.createElement('input');
    var inputText2 = document.createElement('input');
    inputText1.setAttribute("type","text")
    inputText1.setAttribute("size","5")
    inputText2.setAttribute("type","text")
    inputText2.setAttribute("size","5")
    var inputNumber = document.createElement('input');
    inputNumber.setAttribute("type", "number");
    inputNumber.setAttribute("min","0")
    inputNumber.setAttribute("click","updown()")*/
    
    if(data =='d1'){
      this.menu[0] = this.Allmenu[0]
      this.count[0] +=1
      this.total[0] = (this.Allprice[0] * this.count[0])
      this.c1 = true
      /*if(this.x == 0){
        inputText1.setAttribute("value",this.menu[0])
        inputText2.setAttribute("value",this.total[0].toString())
        inputNumber.setAttribute("value",this.count[0].toString())
        inputNumber.setAttribute('ng-Model','count[0]')
        var row = table.insertRow(this.x)
        var cell1 = row.insertCell(0)
        cell1.append(inputText1,inputNumber,inputText2,'Baht')
        this.x+=1
      }
      if(this.y == 0){
        (<HTMLTableElement> document.getElementById("table1")).deleteRow(this.x-1)
        inputText1.setAttribute("value",this.menu[0])
        inputText2.setAttribute("value",this.total[0].toString())
        inputNumber.setAttribute("value",this.count[0].toString())
        inputNumber.setAttribute('ng-Model','count[0]')
        var row = table.insertRow(this.y)
        var cell1 = row.insertCell(0)
        cell1.append(inputText1,inputNumber,inputText2,'Baht')
      }*/
    }
    if(data =='d2'){
      this.menu[1] = this.Allmenu[1]
      this.count[1] +=1
      this.total[1] = (this.Allprice[1] * this.count[1])
      this.c2 = true
    }
    if(data =='d3'){
      this.menu[2] = this.Allmenu[2]
      this.count[2] +=1
      this.total[2] = (this.Allprice[2] * this.count[2])
      this.c3 = true
    }
    if(data =='d4'){
      this.menu[3] = this.Allmenu[3]
      this.count[3] +=1
      this.total[3] = (this.Allprice[3] * this.count[3])
      this.c4 = true
    }
  }
  sum(){
    return this.total[0]+this.total[1]+this.total[2]+this.total[3]
  }
}