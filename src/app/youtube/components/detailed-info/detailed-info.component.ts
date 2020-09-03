import { Component, Input } from '@angular/core';
import { SearchItem } from '../../../shared/models/search-item.model';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent {
  @Input() public item: SearchItem;

  constructor(private detailedInfo: DetailedInfoService) {
    this.detailedInfo.show.subscribe(item => {
      this.item = item;
    });
  }

  public hide(): void {
    this.detailedInfo.show.emit(null);
  }
}
