import { Directive, HostBinding, Input } from '@angular/core';
import { shiftDate } from '../enums';
const { FIRST_DATE_DAYS, SECOND_DATE_MONTH, THIRD_DATE_MONTH } = shiftDate;

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {

  @Input() public appBorderColor: string;

  @HostBinding('class') get classes(): string {
    const publishedDate: Date = new Date(this.appBorderColor);
    const currentDate: Date = new Date();
    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth();
    const date: number = currentDate.getDate();
    const hour: number = currentDate.getHours();
    const minutes: number = currentDate.getMinutes();
    const firstDate: Date = new Date(year, month, date - FIRST_DATE_DAYS, hour, minutes);
    const secondDate: Date = new Date(year, month - SECOND_DATE_MONTH, date, hour, minutes);
    const thirdDate: Date = new Date(year, month - THIRD_DATE_MONTH, date, hour, minutes);

    if (+firstDate < +publishedDate) {
      return 'border-less-7-days';
    }

    if (+secondDate < +publishedDate) {
      return 'border-less-month';
    }

    if (+thirdDate > +publishedDate) {
      return 'border-more-6-month';
    }

    return 'border-more-1-month';
  }

}
