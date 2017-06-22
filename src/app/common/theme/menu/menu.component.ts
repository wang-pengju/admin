import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Array<Menu>;
  currentMenuId: number;
  constructor() { }

  ngOnInit() {
    this.menus = [
      new Menu(1, 'Home', 'icon-home', './deshboard'),
      new Menu(2, 'Notice', 'icon-article', './notice'),
      new Menu(3, 'Article', 'icon-store_classification_no', './article'),
      new Menu(4, 'Comment', 'icon-comment', './comment'),
      new Menu(5, 'Setting', 'icon-Setup', './setting')
    ]
  }
  addActive(menu: Menu) {
    this.currentMenuId = menu.id;
  }
}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public icon: string,
    public route: string
  ) { }
}
