import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'header-nav',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor() {
  }

  @Output()
  menuClick: EventEmitter<any> = new EventEmitter<any>()

  onMenuClick(event: MouseEvent) {
    this.menuClick.emit(event);
  }
}
