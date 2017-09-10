/**
 * Root component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'mg-root', // <mg-root></mg-root>
  // selector: '.mg-root' // <div class="mg-root"></div>
  // selector: '[migdal]' // <div migdal></div>
  template: `
    <mg-greeting-form></mg-greeting-form>
    <mg-greeting-list></mg-greeting-list>
  `
})
export class AppComponent{

}
