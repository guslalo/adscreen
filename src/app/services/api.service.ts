import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'device_equipment/?code=841F0DD945E14C9C'

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<any> {
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic QWRzY3JlZW46MzU3MzU3YWtzLi4u'
      }),
    };
    return this.http.get<any>(environment.baseUrl + this.url, httpOptions );
  }

}
