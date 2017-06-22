import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './article.component';
import { AllComponent } from './all/all.component';
import { ClassifyComponent } from './classify/classify.component';
import { LabelComponent } from './label/label.component';
import { ReteaseComponent } from './retease/retease.component';
import { UploadComponent } from '../../common/theme/upload/upload.component';
import { MarkdownComponent } from '../../common/theme/markdown/markdown.component';
import { FormComponent } from '../../common/theme/form/form.component';
import { ModifyComponent } from './modify/modify.component';

import { ArticleRoutingModule } from '../../routers/article-router.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  declarations: [
    AllComponent,
    ClassifyComponent,
    LabelComponent,
    ReteaseComponent,
    UploadComponent,
    MarkdownComponent,
    ArticleComponent,
    ModifyComponent,
    FormComponent
  ]
})
export class ArticleModule { }
