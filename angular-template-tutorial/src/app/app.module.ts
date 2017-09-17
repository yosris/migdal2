import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import {HighlightDirective} from "./directives/highlight.directive";
import {} from '@angular/common'
import {GrabFromDatePipe} from "./pipes/grab-from-date.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective,
    GrabFromDatePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
