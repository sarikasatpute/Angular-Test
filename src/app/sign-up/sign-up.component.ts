import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
  signUpForm:FormGroup=new FormGroup({})
  constructor(private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.signUpFormBuilder();
  }
  signUpFormBuilder(){
    this.signUpForm=this.formBuilder.group({
      email: ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
      ConfirmPassword: ['',[Validators.required]],
     },{
      validator: ConfirmedValidator('password', 'ConfirmPassword')
     })
  }
  signUp(){

    this.signUpForm.markAllAsTouched();
    if(this.signUpForm.valid){
      alert("welcome")

      this.router.navigate(['/app-sign-in'])

    }
  }

}
