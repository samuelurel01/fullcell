import {BaseComponent} from "../../core/base.component";
import {ContentChildren, Directive, Injector, QueryList, ViewChild} from "@angular/core";
import {CrudComponent} from "./crud.component";
import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DxDataGridComponent} from "devextreme-angular";
import {DxiDataGridColumn} from "devextreme-angular/ui/nested/base/data-grid-column-dxi";
import {DxiColumnComponent} from "devextreme-angular/ui/nested/column-dxi";
import notify from 'devextreme/ui/notify';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {GlobalLoadingIndicator} from "../../core/decorators/global.loading.indicator.decorator";
@Directive()
export abstract class AbstractCrud<T, F> extends BaseComponent {

  filter: any = {} as F;


  model: any = {} as T;

  dataSource: T[] = [];

  @ViewChild(CrudComponent, {static: true}) crudComponent: CrudComponent<T, F>;
  @ViewChild("listGrid", {static: true}) listGrid: DxDataGridComponent;


  private _router: Router;
  protected _route: ActivatedRoute

  constructor(private _injector: Injector) {
    super();
    this._router = this._injector.get(Router);
    this._route = this._injector.get(ActivatedRoute);
  }

  override doAfterContentInit() {
    this.crudComponent.setParent(this);

    if(this.checkRouteCreateMode(this._router.url)) {
      this.doCreateNew(true);
    }
  }


  override ngOnInit() {
    const params = this._route.snapshot.paramMap;
    const id = params.get("id");

    if (id) {
      this.crudComponent.editMode = true;
      this.runOnIdParam(id);
    }
  }


  runOnIdParam(id: any) {
    if (id) {
      this.getMainService().getById(id).subscribe((m: T) => {
        if (m) {
          this.model = m;
          this.init();
        }
      });
    }
  }

  override ngAfterViewInit() {
    this.crudComponent.doAfterViewInit();
  }


  execFilter() {
    return this.doFilter();
  }

  execClear() {
    this.filter = {} as F;
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


  doCreateNew(check: boolean = false) {
    if (check || this.isRouteCreateMode()) {
      this.model = {} as T;
      this.crudComponent.editMode  = true;
      return;
    }

    this.model = {} as T;
    this._router.navigate([this._router.url +`/create`]);
  }

  @GlobalLoadingIndicator
  doSave(isAlsoClose: boolean, showSuccessMessage: boolean = true) {
    // this.clearErrorMessages();
    // this.showMessage = showSuccessMessage;

    return this.of(this.callSaveService(this.model), (sucess: T) => {

      this.model = sucess;
      notify("Registro salvo com sucesso!", 'success', 5000)
      this.doClose(true);

    }, (error: any) => notify("Erro ao salvar o registro!", 'erro', 5000));
  }


  @GlobalLoadingIndicator
  doRemove(editMode: boolean) {
    return this.of(this.callRemoveService(this.model), (sucess: T) => {

      this.model = sucess;
      notify("Registro Excluido com sucesso!", 'success', 5000);
      this.doClose(true);

    }, (error: any) => {

      notify("Erro ao excluir o registro!", 'error', 5000);

    });

  }

  callSaveService(model: T) {
    return this.getMainService().merge(model);
  }

  callRemoveService(model: T) {
    return this.getMainService().delete(model);
  }

  onEditMode(data: any) {
    this.navigateToEditMode(data.id);
  }


  navigateToEditMode(id: any) {
    if (id) {
      let path = this.getBasePath()
      this._router.navigate([`${path}/edit/${id}`])
    }
  }


  private isRouteCreateMode(): boolean {
    return this.checkRouteCreateMode(this._router.url);
  }

  private checkRouteEditMode(path: string): boolean {
    return new RegExp("/edit", "i").test(path);
  }

  private checkRouteCreateMode(path: string): boolean {
    return new RegExp("/create", "i").test(path)
  }

  doClose(backToPathList: boolean = false) {
    let path = '/'

    if(backToPathList) {
      path = this.getBasePath();
    }

    this._router.navigate([path]);
  }

  private getBasePath() {
    let path = this._router.url;

    if (this.checkRouteCreateMode(this._router.url)) {
      path = this._router.url.substring(0, this._router.url.indexOf('/create'))
    }

    if (this.checkRouteEditMode(this._router.url)) {
      path = this._router.url.substring(0, this._router.url.indexOf('/edit'))
    }
    return path;
  }

  init() {

  }

}
