import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from "@angular/core";
import {Observable} from "rxjs";
import {ObservableUtils} from "./observable.utils";

@Directive()
export abstract class BaseComponent implements AfterViewInit, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, OnDestroy, AfterViewChecked {

  ngAfterContentChecked(): void {
  }

  ngAfterContentInit(): void {
    this.doAfterContentInit();
  }

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


  protected doAfterContentInit() {

  }

  of(observable: Observable<any>, successFn?: Function, errorFn?: Function) {
    const defaultHandleError = this.handleError.bind(this);
    return ObservableUtils.of(observable, successFn, errorFn ? errorFn : defaultHandleError);
  }

  handleError(error: any) {

  }
}
