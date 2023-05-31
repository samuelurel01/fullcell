import {BaseComponent} from "../../core/base.component";
import {Component} from "@angular/core";
import {MarcaService} from "../../service/marca.service";
import {MarcaFilterVO} from "../../model/marca.filter.vo";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent {

  constructor(private marcaService: MarcaService) {
    super();
  }

  marcas: any[] = [];

  dataSource: any[] = [{
    region: 'Asia',
    val: 4119626293,
  }, {
    region: 'Africa',
    val: 1012956064,
  }, {
    region: 'Northern America',
    val: 344124520,
  }, {
    region: 'Latin America and the Caribbean',
    val: 590946440,
  }, {
    region: 'Europe',
    val: 727082222,
  }, {
    region: 'Oceania',
    val: 35104756,
  }];


  override ngOnInit() {
    this.marcaService.list({} as MarcaFilterVO).subscribe(marcas => {
      this.marcas = marcas as {}[];
    })
  }
}
