/**
 * This module contains the components for the root module
 * this include the root component: AppComponent
 * component for the homepage called HomeComponent
 * component that displays an about page AboutComponent
 * and a component that should jump whenever the user input bad url: Error404Component
 * The module also imports the TodoModule which includes component to display todo list and todo details page
 * along with the routes for the todo.
 * The root routes are located in the AppRoutesModule
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {Error404Component} from "./components/error-404/error-404.component";
import {RouterModule} from "@angular/router";
import {AppRoutesModule} from "./app-routes.module";
import {TodoModule} from "./todo/todo.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    TodoModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
