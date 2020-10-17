import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {InputValidator} from '../utils';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [Validators.required]);
    heightFormControl = new FormControl('', [Validators.required]);
    weightFormControl = new FormControl('', [Validators.required]);
    genders = [{
        value: 'MALE',
        label: 'Male',
        checked: true
    }, {
        value: 'FEMALE',
        label: 'Female',
        checked: false
    }, {
        value: 'OTHERS',
        label: 'Others',
        checked: false
    }];

    matcher = new InputValidator();
    selectedGender: string;
    age: string;

    handleLogin() {
        alert([this.emailFormControl.value, this.passwordFormControl.value, this.selectedGender, this.weightFormControl.value,
        this.heightFormControl.value, this.age].join('**'));
    }
}
