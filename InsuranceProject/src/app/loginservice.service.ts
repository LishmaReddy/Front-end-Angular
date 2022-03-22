import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from './login';
import { Loginstatus } from './loginstatus';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  baseUrl="http://localhost:8585/adminLogin.api";
  constructor(private http:HttpClient) { }



  
  loginUser(login:Login):Observable<Loginstatus>{
    // console.log(customer)
        return this.http.post<Loginstatus>(`${this.baseUrl}`,login)
      }
}
