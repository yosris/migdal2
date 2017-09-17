import { Component } from '@angular/core';
import {Student} from "./models/student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  student : Student = new Student('', '', 0, '');

  studentSubmitted(ngForm : NgForm, ngModelInstance : any) {
    debugger;
  }
}
