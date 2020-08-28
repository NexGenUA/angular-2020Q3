import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public show: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  public inputValue: string = '';

  constructor(private dataService: DataService) {}

  public showFilter(): void {
    this.show.emit();
  }

  public search(queryString: string): void {
    this.dataService.sortData.emit(null);
    this.dataService.query.emit(queryString);
  }

}
