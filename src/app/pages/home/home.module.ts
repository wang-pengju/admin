import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from '../../routers/home-router.module';
/*导入header，sidebar，footer,content组件 */
import { HeaderComponent } from '../../common/theme/header/header.component';
import { SidebarComponent } from '../../common/theme/sidebar/sidebar.component';
import { ContentComponent } from '../../common/theme/content/content.component';
import { MenuComponent } from '../../common/theme/menu/menu.component';
import { FooterComponent } from '../../common/theme/footer/footer.component';

import { ArticleModule } from '../../pages/article/article.module';
import { CommentModule } from '../../pages/comment/comment.module';
import { SettingModule } from '../../pages/setting/setting.module';
import { NoticeModule } from '../../pages/notice/notice.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ArticleModule,
    CommentModule,
    SettingModule,
    NoticeModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent
  ],
  providers: [HomeComponent]
})
export class HomeModule { }
