import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
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
