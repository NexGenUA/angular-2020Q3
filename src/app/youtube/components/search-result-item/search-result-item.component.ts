import { Component, Input } from '@angular/core';
import { SearchItem } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent {
  @Input() public item: SearchItem;
}
