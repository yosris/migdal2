/**
 * Root module
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './components/app/app.component';
import {GreetingModule} from './greeting/greeting.module';

@NgModule({
  providers: [],
  declarations: [AppComponent],
  imports: [BrowserModule, GreetingModule],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
