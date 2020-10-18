import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-goals',
  templateUrl: './personal-goals.component.html',
  styleUrls: ['./personal-goals.component.scss']
})
export class PersonalGoalsComponent implements OnInit {
  tasks = [
    {
      task_id: 1,
      title: 'Binge watching netflix',
      is_completed: true,
      due_date: '11/08/19'
    },
    {
      task_id: 2,
      title: 'Sleep for 3 hrs',
      is_completed: true,
      due_date: '11/08/19'
    },
    {
      task_id: 3,
      title: 'Sleep for 4 hrs',
      is_completed: false,
      due_date: '11/08/19'
    },
    {
      task_id: 4,
      title: 'Sleep for 5 hrs',
      is_completed: false,
      due_date: '11/08/19'
    },
  ];
  value = '';
  taskGroup: FormGroup = new FormGroup(
      {
        title: new FormControl('', Validators.required),
        due_date: new FormControl('', [Validators.required])
      }
  );
  selectedDate: any;
  constructor() { }

  ngOnInit() {
  }

  addGoals($event: MouseEvent) {
    console.log({...this.taskGroup.value, is_completed: false});
    this.tasks.push({...this.taskGroup.value, is_completed: false});
  }
}
