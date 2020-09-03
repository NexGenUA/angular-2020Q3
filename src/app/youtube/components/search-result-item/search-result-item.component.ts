import { Component, Input } from '@angular/core';
import { SearchItem } from '../../../shared/models/search-item.model';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent {
  @Input() public item: SearchItem;

  constructor(private detailedInfo: DetailedInfoService) { }

  public showDetailedInfo(): void {
    this.detailedInfo.show.emit(this.item);
  }
}
