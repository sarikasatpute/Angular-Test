import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirmed.validator';
import { Users } from '../database/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({})
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.signUpFormBuilder();
  }
  back() {
    this.router.navigate(['/sign-in']);
  }
  signUpFormBuilder() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      ConfirmPassword: ['', [Validators.required]],
    }, {
      validator: ConfirmedValidator('password', 'ConfirmPassword')
    })
  }
  signUp() {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid) {
      setTimeout(async () => {
        await this.saveUser();
        this.router.navigate(['']);
        alert("Sign Up successfully!")
      }, 0);
    }
  }

  async saveUser() {
    let user = new Users();
    user.email = this.signUpForm.value.email;
    user.password = this.signUpForm.value.password;
    user.save();
  }
}
