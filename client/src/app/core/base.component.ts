import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Directive,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from "@angular/core";

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
}
