import { Component, Input, OnInit } from "@angular/core";

import { NbMenuService, NbSidebarService } from "@nebular/theme";
import { UserService } from "../../../@core/data/users.service";
import { AnalyticsService } from "../../../@core/utils/analytics.service";
import { filter } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  @Input() position = "normal";

  loggedInUser = "Nemanja Milojevic"

  userMenu = [{ title: "Profile" }, { title: "Log out" }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.userService
    //   .getUsers()
    //   .subscribe((users: any) => (this.user = users.nick));

      this.menuService.onItemClick().subscribe(( event ) => {
        this.onItemSelection(event.item.title);
      })
  }

  onItemSelection( title ) {
    if ( title === 'Log out' ) {
      sessionStorage.removeItem('token')
      this.router.navigate(['/login'])
    } else if ( title === 'Profile' ) {
      console.log('Profile Clicked ')
    }
  }


  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, "settings-sidebar");

    return false;
  }

  
}
