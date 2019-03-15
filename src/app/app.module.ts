import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { WebcamComponent } from './webcam/webcam.component';
import { Webcam2Component } from './webcam2/webcam2.component';
import { DesignComponent } from './design/design.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // DepartmentListComponent,
    // EmployeeListComponent
    routingComponents,
    DragdropComponent,
    WebcamComponent,
    Webcam2Component,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule//,
    // WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
