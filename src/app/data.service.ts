import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
  }

  getTasks() {
    return this.http.get('http://localhost:3000/api/v1.0/tasks')
                    .map(res => res.json());
  }

  addTask(task) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
    });

    var requestUrl = 'http://localhost:3000/api/v1.0/task/'+task.id;
    this.http.put(requestUrl, task ,options)
                    .subscribe(res => res.json());
  }

  deleteTask(id) {
    let options = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }) 
    });
    
    var requestUrl = 'http://localhost:3000/api/v1.0/task/'+id;

    this.http.delete(requestUrl,options)
                    .subscribe(res => res.json());
    // How to wait for the server to remove the task and then get an update from the server?
    this.getTasks();
  }

}
