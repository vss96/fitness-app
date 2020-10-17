import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  private loginUrl = 'localhost:8080/token'
  login(username, password){
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password');  
    const headers = new HttpHeaders({
        Authorization: "Basic +token",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
      })
    return this.http.post(this.loginUrl, body, {headers});
  }
}