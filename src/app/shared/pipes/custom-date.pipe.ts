import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customdate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dateNow = moment();
    const finishDate = moment(value);

    return finishDate.diff(dateNow, 'days') < 0 ? 'expired' : finishDate.format('YYYY-MM-DD');

  }

}
