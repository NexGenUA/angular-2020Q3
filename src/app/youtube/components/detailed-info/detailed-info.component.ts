import { Component, Input, OnDestroy } from '@angular/core';
import { SearchItem } from '../../../shared/models/search-item.model';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss']
})
export class DetailedInfoComponent implements OnDestroy {
  private readonly detailedInfo$: Subscription;
  @Input() public item: SearchItem;

  constructor(private detailedInfo: DetailedInfoService) {
    this.detailedInfo$ = this.detailedInfo.show.subscribe(item => {
      this.item = item;
    });
  }

  public hide(): void {
    this.detailedInfo.show.emit(null);
  }

  public ngOnDestroy(): void {
    this.detailedInfo$.unsubscribe();
  }
}
