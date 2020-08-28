import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public show: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() public query: EventEmitter<string> = new EventEmitter<string>();
  @Output() public resetFilter: EventEmitter<null> = new EventEmitter<null>();

  public inputValue: string = '';

  public showFilter(): void {
    this.show.emit();
  }

  public search(queryString: string): void {
    this.resetFilter.emit(null);
    this.query.emit(queryString);
  }
}
