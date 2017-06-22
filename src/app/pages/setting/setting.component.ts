import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settingbase = [
    { title:'个性设置', icon:'icon-write', router: 'personality'},
    { title:'开发工具', icon:'icon-tool', router: 'tool'},
    { title:'个人资料', icon:'icon-iconuser', router: 'data'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
