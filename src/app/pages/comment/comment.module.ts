import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './comment.component';
import { ManageComponent } from './manage/manage.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { CommentRoutingModule } from '../../routers/comment-router.module';

@NgModule({
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  declarations: [
    ManageComponent,
    StatisticsComponent,
    CommentComponent
  ]
})
export class CommentModule { }
