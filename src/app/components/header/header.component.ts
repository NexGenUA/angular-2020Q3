import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { take } from 'rxjs/operators';
import { SearchResponse } from '../../shared/models/search-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public show: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() public response: EventEmitter<SearchResponse> = new EventEmitter<SearchResponse>();

  constructor(private httpService: HttpService) {
  }

  public showFilter(): void {
    this.show.emit();
  }

  public delete(): void {
    this.httpService.getData('hello').pipe(
      take(1)
    ).subscribe(data => {
      this.response.emit(data);
    });
  }
}
