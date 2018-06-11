import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private lgsr:LoginService) { }

  ngOnInit() {
    this.lgsr.SetLogged(false);
  }
  checklogin(value: any) {
    //console.log(value);
    if(value.username=="admin"&& value.password=="123")
    {
      this.lgsr.SetLogged(true);
      this.router.navigate(['/'])
    }
  }

}
