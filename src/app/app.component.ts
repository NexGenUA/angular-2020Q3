import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public show: Boolean = true;

  public showFilter(): void {
    this.show = !this.show;
  }
}
