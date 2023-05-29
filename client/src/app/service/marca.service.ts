import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractCrudService} from "./abstract.crud.service";
import {Marca} from "../model/marca";
import {MarcaFilterVO} from "../model/marca.filter.vo";

@Injectable()
export class MarcaService extends AbstractCrudService<Marca, MarcaFilterVO>{

  constructor(private httpClient: HttpClient) {
    super(httpClient, "/marca")
  }

}
