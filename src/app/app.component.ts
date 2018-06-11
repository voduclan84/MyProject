import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  public isLoginIn: boolean;
  constructor(private lgsr:LoginService) {

  }
  ngOnInit(){
    this.isLoginIn=this.lgsr.IsLogged();
  }
  Loggout() {
    this.lgsr.SetLogged(false);
    alert("check out");
  }
  CheckLogin()
  {
    if(this.lgsr.IsLogged()==true)
    {
      alert("you had logged, please logout to login another accout");
    }
  }
}
