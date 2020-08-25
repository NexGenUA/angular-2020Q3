import { Pipe, PipeTransform } from '@angular/core';
import { num } from '../enums';
const { ONE_THOUSAND, ONE_MILLION } = num;

@Pipe({
  name: 'reduceNumber'
})
export class ReduceNumberPipe implements PipeTransform {

  private num: number;

  public transform(value: string): string {
    this.num = +value;

    if (this.num < ONE_THOUSAND) {
      return value;
    }

    if (this.num < ONE_MILLION) {
      this.num = +(this.num / ONE_THOUSAND).toFixed(1);
      return `${this.num}k`;
    }

    this.num = +(this.num / ONE_MILLION).toFixed(1);
    return `${this.num}m`;

  }

}
