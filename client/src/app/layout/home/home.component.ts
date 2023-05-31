import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {AppStateService} from "../../core/app.state.service";
import {Router, RouterState} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  dashboardVisible: boolean = true;

  ngOnInit(): void {
    this.globalLoadPanelVisibleSubscription = this.appStateService.globalLoadPanelVisible.subscribe((visible: boolean) => {
      this.globalLoadPanelVisible = visible;
    });
  }

  globalLoadPanelVisible = false;
  private globalLoadPanelVisibleSubscription: Subscription;

  constructor(private appStateService: AppStateService, private router: Router) {
    console.log("passou pela home");
  }

  activateDashboard() {
      this.dashboardVisible = this.router.url == "/"
  }
}
