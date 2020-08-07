import { Component } from '@angular/core';
import { SortWord } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public show: Boolean = false;

  public showFilter(): void {
    this.show = !this.show;
  }

  public sortData(data: SortWord): void {
    console.log(data);
  }
}
