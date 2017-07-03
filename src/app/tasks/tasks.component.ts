import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Task } from '../task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  task: Task = {
    id: null,
    createdAt: null,
    updatedAt: null,
    dueDate: null,
    resolvedAt: null,
    title: null,
    description: null,
    priority: null,
    status: null
  };

  rForm: FormGroup;
  post: any;

  ngOnInit() {
  }

  constructor(private dataService: DataService, private fb: FormBuilder) {

    setInterval(() => {
      this.dataService.getTasks()
          .subscribe(tasks => {
          this.tasks = tasks;
          });
    }, 5000);

    this.rForm = fb.group({
      'id': [null],
      'createdAt': [null],
      'updatedAt': [null],
      'dueDate': [null],
      'resolvedAt': [null],
      'title': [null],
      'description': [null],
      'priority': [null],
      'status': [null]
    });
  }

  addTask(_task) {

    var x = new Date();
    console.log(x);

    this.task.id = _task.id;
    this.task.createdAt = x.toString();
    this.task.updatedAt = x.toString();
    this.task.dueDate = _task.dueDate;
    this.task.resolvedAt = _task.resolvedAt;
    this.task.title = _task.title;
    this.task.description = _task.description;
    this.task.priority = _task.priority;
    this.task.status = _task.status;
    this.dataService.addTask(this.task);
    console.log(this.task);
    this.task = {
      id: null,
      createdAt: null,
      updatedAt: null,
      dueDate: null,
      resolvedAt: null,
      title: null,
      description: null,
      priority: null,
      status: null
    };
  }

  deleteTask(id) {
    this.dataService.deleteTask(id);
  }
}
