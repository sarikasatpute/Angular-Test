import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sqlite } from 'websql-orm';
import { Users } from '../database/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  users: any;
  localStorageSet: any;
  loginForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private router: Router) {
  }
  ngOnInit() {
    this.loginFormBuilder();
  }
  async saveUser() {
    let user = new Users();
    user.save();
  }

  async autheticateUser() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    let users = await sqlite.fromSqlFirst(new Users(), "select * from users where email ='" + email + "' and password ='" + password + "'", []);

    if (users?.id) {
      localStorage.setItem("currentUser", users.id.toString())
      this.router.navigate(['contact-list']);
      alert("Sign In successfully!");
    } else {
      localStorage.removeItem("currentUser")
      // show error
      alert("Login Fail!");
    }
  }
  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
       this.autheticateUser();
    }
  }
  loginFormBuilder() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      ConfirmPassword: [''],
    })
  }
  forNewUser() {
    this.router.navigate(['/sign-up']);
  }
}
