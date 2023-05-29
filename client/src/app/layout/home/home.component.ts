import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {AppStateService} from "../../core/app.state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  ngOnInit(): void {
    this.globalLoadPanelVisibleSubscription = this.appStateService.globalLoadPanelVisible.subscribe((visible: boolean) => {
      this.globalLoadPanelVisible = visible;
    });
  }

  globalLoadPanelVisible = false;
  private globalLoadPanelVisibleSubscription: Subscription;

  constructor(private appStateService: AppStateService) {
  }
}
