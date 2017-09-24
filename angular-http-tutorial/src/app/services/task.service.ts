/**
 * Created by yarivkatz on 24/09/2017.
 */

import {Http, Response} from "@angular/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../models/task";
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
  constructor(private _http : Http){

  }

  getAllTasks() : Observable<Task[]> {
    const serverObservable = this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json`);
    return serverObservable.map((res : Response) => {
        const tasks : Task[] = [];
        const json = res.json();
        for(let i=0; i<json.length; i++){
          tasks.push(new Task(json[i]));
        }
        return tasks;
    });
    // to put dynamic vars in url:
    // this._http.get(`https://nztodo.herokuapp.com/api/task/${js-expression}?format=json`);
  }
}
