import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { sqlite } from 'websql-orm';
import { Contacts } from '../database/contacts';

@Component({
  selector: 'app-edit-info-popup',
  templateUrl: './edit-info-popup.component.html',
  styleUrls: ['./edit-info-popup.component.css']
})
export class EditInfoPopupComponent implements OnInit {
  editPopUpForm: FormGroup = new FormGroup({});
  height = window.innerHeight - 135;
  @Input()
  contact: any;
  @Output() clickevent = new EventEmitter<Object>();
  file: any;
  constructor(private formBuilder: FormBuilder, private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.updateFormBuilder();
    console.log("contact", this.contact)
  }
  ngOnChanes() {
    this.closeModal();
  }
  updateFormBuilder() {
    this.editPopUpForm = this.formBuilder.group({
      name: [this.contact?.name, [Validators.required]],
      email: [this.contact?.email, [Validators.required]],
      PhoneNumber: [this.contact?.PhoneNumber, [Validators.required]]
    })
  }
  UpdateInfo() {
    this.editPopUpForm.markAllAsTouched();
    if (this.editPopUpForm.valid) {
      this.saveContact(this.editPopUpForm);
      this.clickevent.emit({ isSuccess: true });

      setTimeout(() => {
        this.closeModal();
      }, 3000);
    }
  }
  closeModal() {
    this.activeModal.close();
  }

  async saveContact(form: FormGroup) {

    let contacts = new Contacts();
    if (this.contact) {
       contacts = await sqlite.queryFirst(new Contacts(), { id: this.contact.id});
    }
    contacts.email = this.editPopUpForm.value.email;
    contacts.name = form.value.name;
    contacts.PhoneNumber = this.editPopUpForm.value.PhoneNumber;
    contacts.setImageAndSave(this.file);
   
  }
  onFileChange(event: any) {
    this.file = event.target.files ? event.target.files[0] : '';
  }
}
