import { Component } from '@angular/core';
import { SortWord } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public show: Boolean = true;
  public data: SortWord = null;
  public query: string = '';

  public showFilter(): void {
    this.show = !this.show;
  }

  public sortData(data: SortWord): void {
    this.data = data;
  }

  public getData(query: string): void {
    this.query = query;
  }
}
