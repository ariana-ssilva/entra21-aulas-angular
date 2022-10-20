import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
  
})
export class BackendService {
  sistemaUrl:string = "http://localhost:8080/sistema";

  constructor(private http: HttpClient) { }

  login(body:any):any{
    this.http.post<any>(this.sistemaUrl + "/login", body);
  }

  register(){

  }
}
