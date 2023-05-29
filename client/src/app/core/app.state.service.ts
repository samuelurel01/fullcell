import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable, Injector} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppStateService {
  private static injector: Injector;

    constructor(public injector: Injector) {
      AppStateService.injector = injector;
    }

    globalLoadPanelVisible: Subject<boolean> = new BehaviorSubject<boolean>(false);

    setGlobalLoadPanelVisible(visible: boolean) {
        this.globalLoadPanelVisible.next(visible);
    }

  public static get() {
    return this.injector.get(AppStateService);
  }

}
