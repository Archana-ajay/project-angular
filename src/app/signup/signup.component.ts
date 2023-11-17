import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  isSubmitted = false;
  passwordToggler: boolean = true;
  constructor(private formBuilder: FormBuilder, private router: Router,private userService:UserService) {

  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(15),  Validators.pattern(/^[^\s]+$/)]],
      email: ['', [Validators.required, Validators.email,Validators.minLength(10),Validators.maxLength(30)]],
      mobileNumber: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[0-9]*$/)
      ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?#&]{8,}$/)
        ],
      ],
      confirmPassword: ['', 
        Validators.required,
      ]
    }, {
      validator: this.passwordMatchValidator('password', 'confirmPassword')
    })
  }

  get fc() {
    return this.signupForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.signupForm.invalid) return;

    const user = this.signupForm.value;
    const dataToPass = {
      username: user.name,
      email: user.email,
      phoneNumber: user.mobileNumber,
      password: user.password
    }
    this.userService.registerUser(dataToPass).subscribe({
      next: () => {
        alert("signup successful")
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.log(err)
        alert(err.error.msg)
      }
    });

  }

  passwordMatchValidator(passwordString: string, confirmPasswordString: string) {
    const validators = (form: AbstractControl) => {
      const password = form.get(passwordString)
      const confirmPassword = form.get(confirmPasswordString)

      if (!password || !confirmPassword) return

      if (password.value !== confirmPassword.value) confirmPassword.setErrors({mismatch : true})
      else {
        const errors = confirmPassword.errors
        if (!errors) return 

        delete errors.mismatch
    } 
    }
    return validators
  }

  limitUserNameLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    if (inputValue.length > 12) {
      input.value = inputValue.slice(0, 12);
    }
  }
  
  limitMobileNumberLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    if (inputValue.length > 10) {
      input.value = inputValue.slice(0, 10);
    }
  }
  
  togglePassword() {
    this.passwordToggler = !this.passwordToggler
  }

  checkInput(event: KeyboardEvent) {
    const key = event.keyCode
    return (
      (key >= 65 && key <=90) ||
      (key >= 97 && key <= 122) ||
      key === 8 ||
      key === 32
    )
  }
}
