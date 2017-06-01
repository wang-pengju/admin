import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeComponent } from '../pages/notice/notice.component';

export const noticeRoutes: Routes = [{
    path: 'notice',
    component: NoticeComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(noticeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class NoticeRoutingModule {}
