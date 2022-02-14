import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'AngularTest';
  // isConfirm = false;
  // isLinkShow = true;
  // loginForm: FormGroup = new FormGroup({});

  constructor() { }
  // ngOnInit() {
  //   this.loginFormBuilder();

  // }
//   this.form = fb.group({
//     password: ['', [Validators.required]],
//     confirm_password: ['', [Validators.required]]
//   }, {
//     validator: ConfirmedValidator('password', 'confirm_password')
//   })
// }
  // loginFormBuilder() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
  //     password: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(3)]],
  //     ConfirmPassword: [''],

  //   },{
      
  //      validator: ConfirmedValidator('password', 'ConfirmPassword')
  //   })
  // }
 

}




