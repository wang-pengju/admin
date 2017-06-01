import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';

export const appRoutes: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },{
    path: '**',
    component: LoginComponent
}]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
