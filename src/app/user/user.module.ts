import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {userRoutes } from './userRouter.routes';
import { LoginComponent } from './componants/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './componants/profile/profile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
