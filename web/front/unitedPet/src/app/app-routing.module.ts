import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {ProfileComponent}  from './profile/profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component'
import { SignupComponent } from './signup/signup.component'

const routes: Routes = [
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    // path:"signup",
    path:"",
    component:SignupComponent
  },
  {
    path:"update-profile",
    component:UpdateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
