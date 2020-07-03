import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormupdateComponent } from './formupdate/formupdate.component';
import {Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DragandDropComponent } from './dragand-drop/dragand-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule} from '@angular/cdk/drag-drop'


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  //{path: '', redirectTo: '/formupdate', pathMatch: 'full' },
  {path: 'formupdate', component: FormupdateComponent},
  {path: 'dragand-drop', component: DragandDropComponent}
  
]
@NgModule({
  declarations: [
    AppComponent, 
    FormupdateComponent,
    DragandDropComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
}