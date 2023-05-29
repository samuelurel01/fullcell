import {Component, ContentChildren, Directive, ElementRef, Input, QueryList, ViewChild} from "@angular/core";
import {AbstractCrud} from "./abstract.crud";
import {DxDataGridComponent} from "devextreme-angular";

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent<T, F> {

  parent: AbstractCrud<T, F>;

  @ContentChildren(DxDataGridComponent, {descendants: true}) grids: QueryList<DxDataGridComponent>;


  constructor(private elem: ElementRef) {
  }

  setParent(instance: any) {
    this.parent = instance;
  }

  doAfterViewInit() {
    this.configureGridList();
  }

  private configureGridList() {
    if (!this.grids) {
      console.warn("list grid not configured!")
      return;
    }

    let mainGrid: DxDataGridComponent = this.grids.find((grid: DxDataGridComponent) => {
      return grid.elementAttr && grid.elementAttr['principal'] && !!grid.elementAttr['principal'];
    })

    if (!mainGrid) {
      console.warn("list grid not defined!")
      return;
    }

    this.applyColumnOfEditMainGrid(mainGrid);

    mainGrid.onCellPrepared.subscribe(e => {
      e.cellElement.querySelectorAll('.crud-dynamic-edit-column')
        .forEach( () => {
          e.cellElement.addEventListener( 'click', () =>  {
            this.onEditMode(e.data, this);
          });
        })
    });


    mainGrid.height = '600px';
  }


  private onEditMode(data: any, self: CrudComponent<T, F>) {
    self.parent.onEditMode(data);
  }



  private applyColumnOfEditMainGrid(mainGrid: DxDataGridComponent) {


    const editColumn = {
      cellTemplate: "<i title='Editar' class='fa fa-pen-square crud-dynamic-edit-column'></i>",
      width: "30",
    };

    mainGrid.columns.unshift(editColumn)

    mainGrid.cacheEnabled = false;
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
    this.parent.doCreateNew();
  }

  onButtonClearClick() {
    this.parent.execClear();
  }

  onButtonCloseClick() {
    this.parent.doClose(this.editMode);
  }

  onButtonSalvarClick() {
    this.parent.doSave(this.editMode);
  }

  onButtonExcluirClick() {
    this.parent.doRemove(this.editMode);
  }
}
