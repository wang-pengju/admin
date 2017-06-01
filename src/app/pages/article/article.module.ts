import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './article.component';
import { AllComponent } from './all/all.component';
import { ClassifyComponent } from './classify/classify.component';
import { LabelComponent } from './label/label.component';
import { ReteaseComponent } from './retease/retease.component';

import { ArticleRoutingModule } from '../../routers/article-router.module';
import { NavModule } from '../../common/theme/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    ArticleRoutingModule
  ],
  declarations: [
    AllComponent,
    ClassifyComponent,
    LabelComponent,
    ReteaseComponent,
    ArticleComponent
  ]
})
export class ArticleModule { }
