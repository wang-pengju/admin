import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CommentComponent } from '../pages/comment/comment.component';
import { ManageComponent } from '../pages/comment/manage/manage.component';
import { StatisticsComponent } from '../pages/comment/statistics/statistics.component';
export const commentRoutes: Routes = [
  {
   path: 'comment',
   component: CommentComponent,
   children:[{
     path: 'manage',
     component:ManageComponent
   },{
     path: 'statistics',
     component:StatisticsComponent
   },{
     path: '',
     redirectTo: '/home/comment/manage',
     pathMatch: 'full'
   }]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(commentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommentRoutingModule {}
