import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS_SUPER_ADMIN, MENU_ITEMS_ORGANIZATION_ADMIN, MENU_ITEMS_DEPARTMENT_ADMIN } from './pages-menu';
import { AuthService } from '../@core/services/auth.service';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {

  menu;

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.check()
  }

  check(){
    let role = this.auth.getRole()
    if(role === 'ROLE_SUPER_ADMIN'){
      this.menu = MENU_ITEMS_SUPER_ADMIN
    }else if(role === 'ROLE_ORGANIZATION_ADMIN'){
      this.menu = MENU_ITEMS_ORGANIZATION_ADMIN
    }else{
      this.menu = MENU_ITEMS_DEPARTMENT_ADMIN
    }
  }
}
