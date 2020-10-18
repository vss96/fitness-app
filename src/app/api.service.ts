import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGoals() {
    console.log(environment.apiUrl + 'goals');
    return this.http.get(environment.apiUrl + 'goals');
  }

  addUser(data: any) {
    return this.http.post(environment.apiUrl + 'user/signup', data);
  }

  getTasks() {
    return this.http.get(environment.apiUrl + 'tasks');
  }

  addTasks(body: any) {
    return this.http.post(environment.apiUrl + 'tasks', body);
  }

  getGoalsForUser() {
    return this.http.get(environment.apiUrl + 'user-goals');
  }
}
