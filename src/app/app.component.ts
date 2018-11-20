import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <stock-inventory></stock-inventory>
    </div>
  `
})
export class AppComponent {

}
