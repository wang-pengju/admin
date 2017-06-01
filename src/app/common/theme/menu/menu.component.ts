import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Array<Menu>;
  constructor() { }

  ngOnInit() {
    this.menus =[
      new Menu(1,'Notice','icon-article','notice'),
      new Menu(2,'Article','icon-store_classification_no','article'),
      new Menu(3,'Comment','icon-comment','comment'),
      new Menu(4,'Setting','icon-Setup','setting')
    ]
  }

}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public icon: string,
    public link: string
  ) { }
}
