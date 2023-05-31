import {AfterViewInit, Component, Input, OnInit, ViewChild} from "@angular/core";
import {MatDrawer} from "@angular/material/sidenav";
import {AppRoutingModule, getMenuByRoutes} from "../../app-routing.module";
import {Router, Routes} from "@angular/router";
import {MenuScopeEnum} from "../../model/menu.scope.enum";

@Component({
  selector: 'side-nav',
  templateUrl: './side.nav.component.html',
  styleUrls: ['./side.nav.component.css']
})
export class SideNavComponent implements OnInit{

  menuList: {}[] = [];
  @ViewChild("drawer") drawer: MatDrawer;
  isDrawerOpen: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.menuList = getMenuByRoutes();
  }


  @Input()
  set toogle (event: MouseEvent) {
    this.isDrawerOpen = !this.isDrawerOpen;
  }


  navigate(item: any) {
    this.isDrawerOpen = true;
    if(item && item.itemData && item.itemData.path) {
      this.isDrawerOpen = false;
      this.router.navigate([item.itemData.path]);
    }
  }


  getIconByScope(scope: string) : string {
    if(MenuScopeEnum.CADASTRO == scope) {
      return "fa fa-floppy-disk fa-xl"
    }

    if(MenuScopeEnum.ESTOQUE == scope) {
      return "fa fa-sitemap fa-xl"
    }

    if(MenuScopeEnum.ORCAMENTO == scope) {
      return "fa fa-cart-shopping fa-xl"
    }

    return "fa fa-floppy-disk fa-xl";
  }
}
