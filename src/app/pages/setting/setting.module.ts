import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingComponent } from './setting.component';
import { DataComponent } from './data/data.component';
import { PersonalityComponent } from './personality/personality.component';
import { ToolComponent } from './tool/tool.component';

import { SettingRoutingModule } from '../../routers/setting-router.module';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  declarations: [
    DataComponent,
    PersonalityComponent,
    ToolComponent,
    SettingComponent
  ]
})
export class SettingModule { }
