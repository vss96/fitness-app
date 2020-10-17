import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
