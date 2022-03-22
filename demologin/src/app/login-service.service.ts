import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from './customer';
import { Login } from './login';
import { LoginStatus } from './login-status';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl="http://localhost:8686/login.api";
  constructor(private http:HttpClient) { }

  loginUser(login:Login):Observable<LoginStatus>{
    // console.log(customer)
        return this.http.post<LoginStatus>(`${this.baseUrl}`,login)
      }
}
