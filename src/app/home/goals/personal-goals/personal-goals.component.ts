import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../api.service';

@Component({
  selector: 'app-personal-goals',
  templateUrl: './personal-goals.component.html',
  styleUrls: ['./personal-goals.component.scss']
})
export class PersonalGoalsComponent implements OnInit {
  tasks = [
    {
      task_id: 1,
      title: 'Fix broken PC',
      is_completed: true,
      due_date: '11/08/19'
    },
    {
      task_id: 2,
      title: 'Visit Church two time by',
      is_completed: true,
      due_date: '11/08/19'
    },
    {
      task_id: 3,
      title: 'Get gym membership',
      is_completed: false,
      due_date: '11/08/19'
    },
    {
      task_id: 4,
      title: 'From now on sleep atleast 5 hrs per day',
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
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTasks().subscribe((tasks: any) => this.tasks = tasks);
  }

  addGoals($event: MouseEvent) {
    this.apiService.addTasks({...this.taskGroup.value, is_completed: false}).subscribe(_ => {
      this.apiService.getTasks().subscribe((tasks: any) => this.tasks = tasks);
    });

  }
}
