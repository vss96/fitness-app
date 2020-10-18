import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {InputValidator} from '../utils';
import {AuthService} from '../../../svc/authService'
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) {}
    username = new FormControl('', [
        Validators.required,
    ]);
    passwordFormControl = new FormControl('', [Validators.required]);
    matcher = new InputValidator();
    handleLogin() {
        alert([this.username.value,  this.passwordFormControl.value].join('**'));
        this.authService.login(this.username.value, this.passwordFormControl.value)
        .subscribe(data => this.setSession(data));
        this.router.navigateByUrl('');
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.access_token);
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
