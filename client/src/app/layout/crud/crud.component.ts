import {Component, Input} from "@angular/core";

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  @Input()
  listTitle: string = "Listagem..."

  @Input()
  editTitle: string = "Cadastro...";

  editMode: boolean = false;

}
