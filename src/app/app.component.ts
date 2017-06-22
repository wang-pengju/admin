import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="app">
              <router-outlet></router-outlet>
            </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
