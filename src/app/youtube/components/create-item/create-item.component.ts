import { Component, Input } from '@angular/core';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';
import { SearchItem } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  @Input() public createItem: SearchItem;

  constructor(private detailedInfo: DetailedInfoService) { }

  public showDetailedInfo(): void {
    this.detailedInfo.show.emit(this.createItem);
  }
}
