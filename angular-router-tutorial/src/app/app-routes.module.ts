/**
 * This contains the routes for the root module
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {Error404Component} from "./components/error-404/error-404.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: '', component: HomeComponent},
      {path: '**', component: Error404Component},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutesModule{

}
