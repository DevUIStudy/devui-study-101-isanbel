import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-files',
  templateUrl: './admin-files.component.html',
  styleUrls: ['./admin-files.component.css']
})
export class AdminFilesComponent implements OnInit {
  menu = [{
    title: '通用设置',
    children: [
      {title: '子内容1'},
      {title: '子内容2'},
      {title: '子内容3'},
    ]
  }, {
    title: '项目管理',
    children: [
      {title: '项目设置模版'},
      {title: '子内容2'},
      {title: '子内容3'},
    ]
  }, {
    title: '内容三（默认展开）',
    open: true,
    children: [
      {title: '子内容1(禁用)', disabled: true},
      {title: '子内容2(默认激活)', active: true},
      {title: '子内容3'},
    ]
  }, {
    title: '内容四（没有子项）' 
  }];
  constructor() { }

  ngOnInit() {
  }

}
