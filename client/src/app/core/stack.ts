import * as _ from "lodash";

export class Stack {

  private _store: any[] = [];


  constructor() {
  }

  push(val: any) {
    this._store.push(val);
  }

  pop(): any | undefined {
    return this._store.pop();
  }

  empty(): boolean {
    return _.isEmpty(this._store);
  }

}
