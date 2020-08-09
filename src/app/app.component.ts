import { Component } from '@angular/core';
import { SortWord } from './shared/interfaces';
import { SearchResponse } from './shared/models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public show: Boolean = true;
  public data: SortWord = null;
  public dataResponse: SearchResponse = null;

  public showFilter(): void {
    this.show = !this.show;
  }

  public sortData(data: SortWord): void {
    this.data = data;
  }

  public setData(response: SearchResponse): void {
    this.dataResponse = response;
  }
}
