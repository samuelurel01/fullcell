import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractCrudService<T, F> {

  constructor(private _httpClient: HttpClient,
              private _urlPrefix: string,) {
  }


  list(filter: F): Observable<T> {
    return this._httpClient.post<T>("/api" + this._urlPrefix + "/list", filter, {
      headers: {'Content-Type': 'application/json'}
    });
  }
}
