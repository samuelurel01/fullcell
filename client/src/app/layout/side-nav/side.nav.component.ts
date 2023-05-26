import {AfterViewInit, Component, Input, OnInit, ViewChild} from "@angular/core";
import {MatDrawer} from "@angular/material/sidenav";
import {AppRoutingModule, getMenuByRoutes} from "../../app-routing.module";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'side-nav',
  templateUrl: './side.nav.component.html',
  styleUrls: ['./side.nav.component.css']
})
export class SideNavComponent implements OnInit{

  menuList: Routes = [];
  @ViewChild("drawer") drawer: MatDrawer;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.menuList = getMenuByRoutes();
  }


  @Input()
  set toogle (event: MouseEvent) {
    this.drawer.toggle();
  }


  navigate(url: any) {
    if(url) {
      this.router.navigate([url]);
    }
  }
}
