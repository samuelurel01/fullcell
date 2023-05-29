import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'header-nav',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuUserOptions: any[] = [{
    id: '1',
    name: 'Samuel Urel',
    items: [{
      id: '1_1',
      name: 'Perfil'
    }, {
      id: '1_2',
      name: 'Sair'
    }]
  }];

  constructor() {
  }

  @Output()
  menuClick: EventEmitter<any> = new EventEmitter<any>()

  menuOptions =  {
      icon: 'menu',
      onClick: (event: any) => this.menuClick.emit(event),
    }

  menuUserClick(event: any) {
    console.log(event);
  }
}
