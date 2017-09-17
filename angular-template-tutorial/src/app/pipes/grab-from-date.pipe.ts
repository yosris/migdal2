/**
 * grab from date pipe
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'grabFromDate'
})
export class GrabFromDatePipe implements PipeTransform{
  transform(value: Date, whatToGrab : string): number{
    switch (whatToGrab) {
      case 'day':
        return value.getDate();
      case 'month':
        return value.getMonth() + 1;
      case 'year':
      return value.getFullYear();
    }
  }
}
