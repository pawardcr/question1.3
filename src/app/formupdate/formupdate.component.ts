import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formupdate',
  templateUrl: './formupdate.component.html',
  styleUrls: ['./formupdate.component.scss']
})
export class FormupdateComponent implements OnInit {
  isChecked : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  @Input()name :any
  @Input()num :any
  @Input()occ :any

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
