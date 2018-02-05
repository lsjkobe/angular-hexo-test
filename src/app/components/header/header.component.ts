import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string;
  list1:any[];
  list2:any[];

  constructor() { }

  ngOnInit() {
    this.title = '这是angular头部组件';
    this.list1=[
      "lsj",
      "lsj1",
      "lsj2"
    ];
    this.list2=[
      { 
        name:"lsj",
        namelist:[
          "a",
          "b",
          "c"
        ]
      },
      { 
        name:"lsj2",
        namelist:[
          "aa",
          "bb",
          "cc"
        ]
      }
    ];
  }

}
