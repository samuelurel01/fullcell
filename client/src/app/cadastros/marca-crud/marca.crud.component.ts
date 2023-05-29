import {Component} from "@angular/core";
import {MarcaService} from "../../service/marca.service";
import {AbstractCrud} from "../../layout/crud/abstract.crud";
import {Marca} from "../../model/marca";
import {MarcaFilterVO} from "../../model/marca.filter.vo";

@Component({
  selector: 'marca-crud',
  templateUrl: './marca.crud.component.html',
  styleUrls: ['./marca.crud.component.css']
})
export class MarcaCrudComponent extends AbstractCrud<Marca, MarcaFilterVO>{

  constructor(private mainService: MarcaService) {
    super();
  }

  override getMainService(): any {
    return this.mainService;
  }
}
