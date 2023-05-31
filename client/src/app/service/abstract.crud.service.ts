import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractCrudService<T, F> {

  constructor(private _httpClient: HttpClient,
              private _urlPrefix: string,) {
  }


  getById(id: number) : Observable<T> {
    return this._httpClient.get<T>("/api" + this._urlPrefix + "/" + id);
  }

  delete(data: T) : Observable<any> {
    return this._httpClient.delete<T>("/api" + this._urlPrefix + "/", {
      headers: {'Content-Type': 'application/json'}, body: data
    });
  }

  merge(data: any) : Observable<T> {
    if(data && !!data['id']) {
      return this._httpClient.put<T>("/api" + this._urlPrefix + "/", data, {
        headers: {'Content-Type': 'application/json'}
      });
    }

    return this._httpClient.post<T>("/api" + this._urlPrefix + "/", data, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  list(filter: F): Observable<T[]> {
    return this._httpClient.post<T[]>("/api" + this._urlPrefix + "/list", filter, {
      headers: {'Content-Type': 'application/json'}
    });
  }
}
