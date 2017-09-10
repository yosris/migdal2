/**
 * Greeting module
 */

import {NgModule} from '@angular/core';
// import * as services from '...';
import {GreetingService} from './services/greeting.service';
import {GreetingFormComponent} from './components/greeting-form/greeting-form.component';
import {GreetingListComponent} from './components/greeting-list/greeting-list.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  providers: [GreetingService],
  declarations: [GreetingFormComponent, GreetingListComponent],
  exports: [GreetingFormComponent, GreetingListComponent],
  imports: [FormsModule, CommonModule]
})
export class GreetingModule{

}
