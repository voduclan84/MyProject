import { Injectable } from '@angular/core';
import {Response,Http } from '@angular/http';
import {HttpClient} from '@angular/common/http'; 
import 'rxjs/Rx';
import {Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
//import { HttpClient } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string = "http://5b17326af5c9b700145511d8.mockapi.io/employeess";
  constructor(private http: Http) { }
  GetList(): Observable<any[]>{
    return this.http.get(this.apiUrl).pipe(map((response:Response) => response.json()));
  }
}
