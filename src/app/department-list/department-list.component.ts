import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  // template: `
  //   <p>
  //     department-list works!
  //     <ul>
  //     <li *ngFor="let item of departments">{{item.name}}</li></ul>
  //   </p>
  // `,
  templateUrl:'./department.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {
 public departments = [
    {'id':1,'name':'fffffffffffff'},
    {'id':2,'name':'11111111111'},
    {'id':3,'name':'wwwwwwwwwwwwwww'},
    {'id':4,'name':'ddddddddddd'},
    {'id':5,'name':'dddddcccccccccccccccc'}
  

  ]
  constructor() { }

  ngOnInit() {
  }

}
