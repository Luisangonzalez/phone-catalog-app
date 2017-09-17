import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/main.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AppComponent {
  constructor() {
  }
}
