import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  itemprice = [{
    id: 1,
    name: 'tea',
    price: 10
  }, {
    id: 2,
    name: 'coffe',
    price: 15
  }, {
    id: 3,
    name: 'black tea',
    price: 5
  }];
  loginForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
  ngOnInit() {
    this.loginFormBuilder();
    this.test();
  }
  loginFormBuilder() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      ConfirmPassword: [''],
    })

  }

  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      alert("hi")
      this.router.navigate(['/app-contact-list']);
    }
  }
  forNewUser() {
    this.router.navigate(['/sign-up']);
  }



  // var item = [{
  // 	id: 1,
  // 	name: 'tea',
  // 	price: 10
  // },{
  // 	id: 2,
  // 	name: 'coffe',
  // 	price: 15
  // },{
  // 	id: 3,
  // 	name: 'black tea',
  // 	price: 5
  // }];


  test() {
    var sum = 0;
    // for (let i = 0; i <= this.item.length; i++) {
    //   sum += parseInt(this.item[i], 10 );

    // }

    // for (var shirt of this.item) {
    //   console.log(shirt.price,"price");
    //   for(let i=0;i<shirt.price;i++){
    //     sum +=shirt.price;
    //   }
    //   console.log(sum,"sum");

    // }
  //   this.itemprice.forEach(item => {
  //     sum += item.price;
  //   })
  //   console.log(sum,"sum");
    
  // }
  this.itemprice.forEach(item=>{
sum+=item.price;
  })
  console.log(sum,"sum")
}
}
