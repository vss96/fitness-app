import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {InputValidator} from '../utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [Validators.required]);
    matcher = new InputValidator();

    handleLogin() {
        alert([this.emailFormControl.value,  this.passwordFormControl.value].join('**'));
    }
}
