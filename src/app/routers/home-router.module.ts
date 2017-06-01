import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { NoticeComponent } from '../pages/notice/notice.component';

import { articleRoutes } from './article-router.module';
import { commentRoutes } from './comment-router.module';
import { settingRoutes } from './setting-router.module';

export const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'notice',
        component: NoticeComponent
      },
      // ...noticeRoutes,
      ...articleRoutes,
      ...commentRoutes,
      ...settingRoutes,
      {
        path: '',
        redirectTo: '/home/article/all',
        pathMatch: 'full'
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
