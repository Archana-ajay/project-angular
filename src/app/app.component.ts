import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false;
  title = 'my-project';
  constructor(private router:Router,private authService:AuthService){
    this.authService.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  toggleLogin() {
    if (this.isLoggedIn) {
      // Perform logout logic
      this.authService.logout();
      // Redirect to the login page or any other page
      this.router.navigate(['/login']);
    } else {
      // Redirect to the login page
      this.router.navigate(['/login']);
    }
  }

}
