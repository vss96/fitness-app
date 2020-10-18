import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {GoalsCreatorComponent} from './goals-creator/goals-creator.component';
import {AccountCreatorStepperComponent} from './account-creator-stepper/account-creator-stepper.component';



const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'create-account',
        component: AccountCreatorStepperComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
