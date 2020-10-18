import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CalorieService {
  constructor(private http: HttpClient) { }
  private loginUrl = 'localhost:8080/api/calories'
  store(){
    const body = new HttpParams()
    return this.http.post(this.loginUrl, body);
  }
}