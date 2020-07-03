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
  coffee=["Coffee",150]
  tea=["Tea",140]
  water =["Water",120]
  beer = ["Beer" ,360]
  selected1 :any
  selected2:any
  selected3:number
  event:any
  total1:number
  total2:number
  total3:number
  total4:number

  constructor(){
    //console.log(typeof(this.coffee[1]))
  }
  allowDrop(event) {
    event.preventDefault();
  }
  drag(event){
    event.dataTransfer.setData("text", event.target.id);
    //console.log(event.target.id)
  }
 
  drop(event){
    event.preventDefault()
    let data = event.dataTransfer.getData('text');
    console.log(data)

    if(data == 1){
      this.selected1 = this.coffee[0]
      let x:number
      this.selected3 = (1 * x)
      
    }
    
  }

}
