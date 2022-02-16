import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { sqlite } from 'websql-orm';
import { Contacts } from '../database/contacts';
import { Users } from '../database/user';
import { EditInfoPopupComponent } from '../edit-info-popup/edit-info-popup.component';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @ViewChild('TABLE', { static: false })
  TABLE!: ElementRef;
  imagePath: string | ArrayBuffer | null = null;
  contacts: Contacts[] | undefined;
  constructor(private router: Router, private modalService: NgbModal) { }

  //export the list

  async ExportTOExcel() {
    let contacts = await sqlite.fromSql(new Contacts(), "select email,name,PhoneNumber from contacts where userId = ?", [localStorage.getItem("currentUser")]);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(contacts);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
  }

  ngOnInit(): void {
    setTimeout(async () => {
      await this.fetchContact();
    }, 500);
  }
  //get form
  async fetchContact() {
    this.contacts = await sqlite.query(new Contacts(), { userId: localStorage.getItem("currentUser") });
  }
  //
  editForm(contact: any) {
    const modalRef = this.modalService.open(EditInfoPopupComponent, { size: 'lg' });
    modalRef.componentInstance.contact = contact;
    modalRef.componentInstance.clickevent.subscribe(($event: any) => {
      if ($event.isSuccess) {
        this.fetchContact();
      }
    })
  }

  logOut() {
    localStorage.removeItem("currentUser");
    this.router.navigate(['']);
  }

}
