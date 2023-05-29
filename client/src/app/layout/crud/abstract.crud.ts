import {BaseComponent} from "../../core/base.component";
import {Directive, ViewChild} from "@angular/core";
import {CrudComponent} from "./crud.component";
import {Observable, of} from "rxjs";

@Directive()
export abstract class AbstractCrud<T, F> extends BaseComponent {

  filter: any = {} as T;

  dataSource: T[] = [];

  @ViewChild(CrudComponent, {static: true}) crudComponent: CrudComponent<T, F>;


  constructor() {
    super();
  }

  override doAfterContentInit() {
    this.crudComponent.setParent(this);
  }

  execFilter() {
    return this.doFilter();
  }

  canFilter(): boolean {
    return true;
  }


  beforeDoFilter() {
  }

  public getMainService(): any {
    return null;
  }

  callFilterService(filter: any) : Observable<any> {
    return this.getMainService().list(filter);
  }

  doFilter() {
    if (this.canFilter()) {
      this.beforeDoFilter();
      return this.callFilterService(this.filter as F).subscribe(ds => {
        this.dataSource = ds;
        //this.hideMessages();
        this.afterDoFilter();
      });
    }
    return null;
  }

  afterDoFilter() {

  }
}
