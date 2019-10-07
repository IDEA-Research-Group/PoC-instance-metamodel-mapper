import { Component } from '@angular/core';
import {MENU_ITEMS} from '../pages/pages-menu';


@Component({
  selector: 'ngx-mquery-app',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class MQueryComponent {
  menu = MENU_ITEMS;
}
