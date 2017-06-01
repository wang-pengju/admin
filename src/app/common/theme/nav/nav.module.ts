import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent} from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    NavComponent
  ],
  //这里记得添加PublicComponent组件，不然在其他地方将不能使用PublicComponent
  exports: [NavComponent],
  providers: []
})

export class NavModule { }
