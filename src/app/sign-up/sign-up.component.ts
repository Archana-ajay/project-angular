import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupUsers:any[]=[];
  signupObj:any={
    "username": "",
    "email": "",
    "phone":"",
    "password":""
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers))
    this.signupObj={
      username:"",
      email:"",
      phone:"",
      password:""
    }
  }
}
