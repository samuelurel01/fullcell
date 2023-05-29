import {Component, Input} from "@angular/core";
import {AbstractCrud} from "./abstract.crud";

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent<T, F> {

  parent: AbstractCrud<T, F>;

  setParent(instance: any) {
    this.parent = instance;
  }

  @Input()
  listTitle: string = "Listagem..."

  @Input()
  editTitle: string = "Cadastro...";

  editMode: boolean = false;


  onButtonFilterClick() {
    console.log("Filter click")
    this.parent.execFilter();
  }

  onButtonNewClick() {

  }

  onButtonClearClick() {
    this.parent.execClear();
  }

  onButtonCloseClick() {

  }
}
