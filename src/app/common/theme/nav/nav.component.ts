import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<nav class="appNav">
               <ul class="nav-list">
                 <li class="listshow" *ngFor="let database of navlist">
                   <a [routerLink]="database.router" routerLinkActive="active">
                     <i class="iconfont" [ngClass]="database.icon"></i>{{database.title}}
                   </a>
                 </li>
               </ul>
             </nav>`,
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  @Input()
  navlist: any = [];

  constructor(){}

  ngOnInit() {
    console.log(this.navlist);
  }
}
