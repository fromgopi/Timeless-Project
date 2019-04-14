import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private baseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getAll(username: string): Observable<any> {
    console.log(this.baseUrl + '/' + username['githubUserName'] + '/repos');


    const headers = new HttpHeaders({
    });

    return this.http.get(this.baseUrl + '/' + username['githubUserName'] + '/repos', {headers: headers});
  }

  getAgentLog(): Observable<any> {
    return this.http.get('http://0.0.0.0:5000/data');
  }
}
