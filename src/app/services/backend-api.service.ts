import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {


  constructor(private http: HttpClient) { }

  getAgentLog(): Observable<any> {
    return this.http.get('http://0.0.0.0:5000/data');
  }
}
