import { Directive, HostBinding, Input } from '@angular/core';

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
    const sevenDaysLessDate: Date = new Date(year, month, date - 7, hour, minutes);
    const oneMonthLessDate: Date = new Date(year, month - 1, date, hour, minutes);
    const sixMonthLessDate: Date = new Date(year, month - 6, date, hour, minutes);

    if (+sevenDaysLessDate < +publishedDate) {
      return 'border-less-7-days';
    }

    if (+oneMonthLessDate < +publishedDate) {
      return 'border-less-month';
    }

    if (+sixMonthLessDate > +publishedDate) {
      return 'border-more-6-month';
    }

    return 'border-more-1-month';
  }

}
