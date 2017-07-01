import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
  }

  getTasks() {
    return this.http.get('http://localhost:3000/api/v1.0/tasks')
                    .map(res => res.json());
  }

  deleteTask(id) {
    var requestUrl = 'http://localhost:3000/api/task/';
    return this.http.delete(requestUrl, id)
                    .map(res => res.json());
  }

}
