import {AbstractCrud} from "../../layout/crud/abstract.crud";
import {Component, Injector} from "@angular/core";

@Component({
  selector: 'produto-crud',
  templateUrl: './produto.crud.component.html'
})
export class ProdutoCrudComponent extends AbstractCrud<any, any>{


  constructor(injector: Injector) {
    super(injector);
  }
}
