import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { WebcamComponent } from './webcam/webcam.component';
import { Webcam2Component } from './webcam2/webcam2.component';

const routes: Routes = [
  {path:'department',component:DepartmentListComponent},
  {path:'employee',component:EmployeeListComponent},
  {path:'dragdrop',component:DragdropComponent},
  {path:'webcam',component:WebcamComponent},
  {path:'webcam2',component:Webcam2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent]
