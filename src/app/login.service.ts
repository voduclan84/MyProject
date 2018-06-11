import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public _isLoginedIn: boolean;
  constructor(
    
  ) { }
  IsLogged():boolean {
    return this._isLoginedIn;
  }
  SetLogged(isloginedIn:boolean){
    this._isLoginedIn=isloginedIn;
  }
}
