import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormupdateComponent } from './formupdate/formupdate.component';
import {Routes,RouterModule} from '@angular/router';
import { GridComponent } from './grid/grid.component';

const appRoutes: Routes = [
  //{path:'',component: AppComponent},
  {path:'formupdate',component: FormupdateComponent},
]
@NgModule({
  declarations: [AppComponent, FormupdateComponent, GridComponent],
  imports: [BrowserModule,AgGridModule.withComponents([]),
            RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}