import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceNumber'
})
export class ReduceNumberPipe implements PipeTransform {

  private num: number;

  public transform(value: string): string {
    this.num = +value;

    if (this.num < 1000) {
      return value;
    }

    if (this.num < 1000000) {
      this.num = +(this.num / 1000).toFixed(1);
      return `${this.num}k`;
    }

    this.num = +(this.num / 1000000).toFixed(1);
    return `${this.num}m`;

  }

}
