import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    "userName": "",
    "password": ""
  }

  loginSuccess=false;
  loginError=false;
  onLogin(){
    this.loginSuccess=false;
    this.loginError=false;
   
  }
}
