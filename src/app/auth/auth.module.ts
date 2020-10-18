import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatRadioModule,
    MatSliderModule, MatStepperModule
} from '@angular/material';
import {AuthRoutingModule} from './auth-routing.module';
import { GoalsCreatorComponent } from './goals-creator/goals-creator.component';
import { AccountCreatorStepperComponent } from './account-creator-stepper/account-creator-stepper.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthComponent, GoalsCreatorComponent, AccountCreatorStepperComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatRadioModule,
        MatSliderModule,
        AuthRoutingModule,
        MatIconModule,
        MatListModule,
        MatStepperModule
    ],
  exports: [AuthComponent]
})
export class AuthModule { }
