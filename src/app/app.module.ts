import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*引进根组件根路由模块*/
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routers/app-router.module';
/*引进子组件、子模块*/
import { LoginComponent} from './pages/login/login.component';
import { HomeModule } from './pages/home/home.module';

// import { MarkdownComponent } from './common/theme/markdown/markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    // MarkdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
