import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { SortWord } from '../../../shared/interfaces';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() public show: Boolean;
  @ViewChild(MatSort) public sort: MatSort;
  public inputValue: string;

  constructor(private dataService: DataService) { }

  public sortData(data: SortWord): void {
    if (data.active) {
      this.dataService.sortData.emit(data);
    }
  }

  public sortByWord(): void {
    const sortWord: SortWord = {
      active: '',
      direction: '',
      word: this.inputValue,
    };
    this.sort.sort({id: '', start: 'asc', disableClear: false});
    this.dataService.sortData.emit(sortWord);
    this.inputValue = '';
  }
}
