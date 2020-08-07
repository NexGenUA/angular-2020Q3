import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public show: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  public showFilter(): void {
    this.show.emit();
  }
}
