import { Component, Input } from '@angular/core';
import { SearchItem } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent {
  @Input() public item: SearchItem;
}
