import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/)
        ],
      ],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/)
      ]]
    }, {
      validator: this.passwordMatchValidator('password', 'confirmPassword')
    })
  }

  get fc() {
    return this.signupForm.controls;
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

  submit() {
    this.isSubmitted = true;
    if (this.signupForm.invalid) return;
    this.router.navigate(['/login']);
  }
  
  limitMobileNumberLength(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    if (inputValue.length > 10) {
      input.value = inputValue.slice(0, 10);
    }
  }
}
