import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormupdateComponent } from './formupdate/formupdate.component';
import {Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';



const appRoutes: Routes = [
  
  {path:'formupdate',component:FormupdateComponent}
]
@NgModule({
  declarations: [
    AppComponent, 
    FormupdateComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
}