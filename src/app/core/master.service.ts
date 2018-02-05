import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MasterService {

  constructor(private http: Http) { }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.http.get(url, options);
  }

}
