import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  coffee =["Coffee",150]
  tea=[2,"Tea",140]
  water =[3,"Water",120]
  beer = [4,"Beer" ,360]
  c1:boolean
  c2:boolean
  c3:boolean
  c4:boolean
  event:any

  constructor(){
    
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
      //this.count[0] +1
      this.total[0] = (this.Allprice[0] * this.count[0])
      
    }
    if(this.c2 == true){
      //this.count[0] +1
      this.total[1] = (this.Allprice[1] * this.count[1])
      
    }
    if(this.c3 == true){
      //this.count[0] +1
      this.total[2] = (this.Allprice[2] * this.count[2])
     
    }
    if(this.c4 == true){
      //this.count[0] +1
      this.total[3] = (this.Allprice[3] * this.count[3])
      
    }
  }
  //this.total[0]+this.total[1]+this.total[2]+this.total[3]
  drop(event){
    event.preventDefault()
    let data = event.dataTransfer.getData('text');
    //console.log(data)
    
    if(data == 'd1'){
      this.menu[0] = this.Allmenu[0]
      this.count[0] +=1
      this.total[0] = (this.Allprice[0] * this.count[0])
      this.c1 = true
      
    }
    if(data == 'd2'){
      this.menu[1] = this.Allmenu[1]
      this.count[1] +=1
      this.total[1] = (this.Allprice[1] * this.count[1])
      this.c2 = true
      //document.getElementById('d2').value = this.count[1]
      
    }
    if(data == 'd3'){
      this.menu[2] = this.Allmenu[2]
      this.count[2] +=1
      this.total[2] = (this.Allprice[2] * this.count[2])
      this.c3 =true
    }
    if(data == 'd4'){
      this.menu[3] = this.Allmenu[3]
      this.count[3] +=1
      this.total[3] = (this.Allprice[3] * this.count[3])
      this.c4 =true      
    } 
  }
  sum(){

    return this.total[0]+this.total[1]+this.total[2]+this.total[3]
  }
}