import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-goals-creator',
  templateUrl: './goals-creator.component.html',
  styleUrls: ['./goals-creator.component.scss']
})
export class GoalsCreatorComponent implements OnInit {

  goals = [
    {
      name: 'Binge watching netflix'
    },
    {
      name: 'Sleep for 3 hrs'
    }
  ];
  nameFormControl = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit() {
  }

  addGoals($event) {
    console.log(this.nameFormControl.value);
    this.goals.push({name: this.nameFormControl.value});
    this.nameFormControl.reset();
  }
}
