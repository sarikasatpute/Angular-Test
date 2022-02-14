import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditInfoPopupComponent } from './edit-info-popup/edit-info-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUPComponent,
    ContactListComponent,
    EditInfoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
