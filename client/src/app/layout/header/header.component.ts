import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'header-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() {
  }

  @Output()
  menuClick: EventEmitter<any> = new EventEmitter<any>()

  menuOptions =  {
      icon: 'menu',
      onClick: (event: any) => this.menuClick.emit(event),
    }
}
