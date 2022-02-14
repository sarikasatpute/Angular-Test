import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-info-popup',
  templateUrl: './edit-info-popup.component.html',
  styleUrls: ['./edit-info-popup.component.css']
})
export class EditInfoPopupComponent implements OnInit {
  editPopUpForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  ngOnChanes() {
  }
  updateFormBuilder(){
    this.editPopUpForm=this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      PhoneNumber:['',[Validators.required]]
    })
  }
  UpdateInfo(){
this.editPopUpForm.markAllAsTouched();
if(this.editPopUpForm.valid){
  
}
  }
}
