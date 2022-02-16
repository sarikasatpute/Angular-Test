import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditInfoPopupComponent } from './edit-info-popup/edit-info-popup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUPComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
