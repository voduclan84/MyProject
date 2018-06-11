import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private loginService: LoginService) { }
  canActivate(){
     //next: ActivatedRouteSnapshot,
     //state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let status = this.loginService.IsLogged();
    if(status==false)
    {
        alert("chưa đăng nhập");
    }
    return status;
    //return true;
  }
}

