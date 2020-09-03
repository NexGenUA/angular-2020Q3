import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {

  @Input() public item: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
