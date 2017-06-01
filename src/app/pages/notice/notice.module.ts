import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeComponent } from './notice.component';
import { NoticeRoutingModule } from '../../routers/notice-router';

@NgModule({
  imports: [
    CommonModule,
    NoticeRoutingModule
  ],
  declarations: [
    NoticeComponent
  ]
})
export class NoticeModule { }
