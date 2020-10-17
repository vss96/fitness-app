import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {InputValidator} from '../utils';
import {AuthService} from '../../../svc/authService'
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private authService: AuthService) {}
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [Validators.required]);
    matcher = new InputValidator();
    handleLogin() {
        alert([this.emailFormControl.value,  this.passwordFormControl.value].join('**'));
        this.authService.login(this.emailFormControl.value, this.passwordFormControl.value)
        .subscribe(data => this.setSession(data))
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}
