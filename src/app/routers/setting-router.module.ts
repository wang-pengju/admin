import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingComponent } from '../pages/setting/setting.component';
import { PersonalityComponent } from '../pages/setting/personality/personality.component';
import { ToolComponent } from '../pages/setting/tool/tool.component';
import { DataComponent } from '../pages/setting/data/data.component';

export const settingRoutes: Routes = [
  {
   path: 'setting',
   component: SettingComponent,
   children: [{
     path: 'personality',
     component: PersonalityComponent
   },{
     path: 'tool',
     component: ToolComponent
   },{
     path: 'data',
     component: DataComponent
   },{
     path: '',
     redirectTo: '/home/setting/personality',
     pathMatch: 'full'
   }]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(settingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingRoutingModule {}
