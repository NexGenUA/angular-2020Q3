import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { SortWord } from '../interfaces';
import { num, sortDirection } from '../enums';
const { POSITIVE, NEGATIVE } = num;
const { ASK, DESK } = sortDirection;

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  private sorted: SearchItem[];
  private filterWord: string = '';

  private sortOfDate(direction: string): SearchItem[] {
    const dir: number = direction === DESK ? POSITIVE : NEGATIVE;
    return this.sorted.sort((a, b): number => {
      const dateA: number = +new Date(a.snippet.publishedAt);
      const dateB: number = +new Date(b.snippet.publishedAt);
      return (dateA - dateB) * dir;
    });
  }

  private sortOfView(direction: string): SearchItem[] {
    const dir: number = direction === ASK ? POSITIVE : NEGATIVE;
    return this.sorted.sort((a, b): number => {
      const viewA: number = +a.statistics.viewCount;
      const viewB: number = +b.statistics.viewCount;
      return (viewA - viewB) * dir;
    });
  }

  private filterByWord(filterWord: string): SearchItem[] {
    return this.sorted.filter(data => new RegExp(filterWord, 'i').test(data.snippet.title));
  }

  public transform(value: SearchItem[], sortData: SortWord): SearchItem[] {

    if (value) {
      this.sorted = value.slice();
      const filterName: string = sortData?.active || null;
      this.filterWord = sortData ? sortData?.word || this.filterWord : '';

      this.sorted = this.filterByWord(this.filterWord);

      if (filterName) {
        switch (filterName) {
          case 'date': {
            switch (sortData.direction) {
              case `${ASK}`: {
                return this.sortOfDate(ASK);
              }
              case `${DESK}`: {
                return this.sortOfDate(DESK);
              }
              default: {
                return this.sorted;
              }
            }
          }
          case 'count-of-views': {
            switch (sortData.direction) {
              case `${ASK}`: {
                return this.sortOfView(ASK);
              }
              case `${DESK}`: {
                return this.sortOfView(DESK);
              }
              default: {
                return this.sorted;
              }
            }
          }
          default: {
            return this.sorted;
          }
        }
      }

      if (this.filterWord) {
        return this.filterByWord(this.filterWord);
      }

      return value;
    }
  }
}
