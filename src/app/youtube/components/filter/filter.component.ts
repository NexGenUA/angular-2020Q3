import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { SortWord } from '../../../shared/interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() public show: Boolean;
  @ViewChild(MatSort) public sort: MatSort;
  @Output() public sortInfo: EventEmitter<SortWord> = new EventEmitter<SortWord>();
  public inputValue: string;

  public sortData(data: SortWord): void {
    if (data.active) {
      this.sortInfo.emit(data);
    }
  }

  public sortByWord(): void {
    const sortWord: SortWord = {
      active: '',
      direction: '',
      word: this.inputValue,
    };
    this.sort.sort({id: '', start: 'asc', disableClear: false});
    this.sortInfo.emit(sortWord);
    this.inputValue = '';
  }
}
