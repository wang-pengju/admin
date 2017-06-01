import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ArticleComponent } from '../pages/article/article.component';
import { AllComponent } from '../pages/article/all/all.component';
import { ClassifyComponent } from '../pages/article/classify/classify.component';
import { LabelComponent } from '../pages/article/label/label.component';
import { ReteaseComponent } from '../pages/article/retease/retease.component';

export const articleRoutes: Routes = [
  {
   path: 'article',
   component: ArticleComponent,
   children: [{
     path: 'all',
     component: AllComponent
   },{
     path: 'classify',
     component: ClassifyComponent
   },{
     path: 'label',
     component: LabelComponent
   },{
     path: 'retease',
     component: ReteaseComponent
   },{
     path: '',
     redirectTo: '/home/article/all',
     pathMatch: 'full'
   }]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule {}
