import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from './phone.model';

@Component({
  selector: 'app-list',
  template: `
  <nav *ngFor="let phone of phones" (click)="selected.emit(phone)" class="mdl-navigation">
    <a class="mdl-navigation__link">{{phone.model}}</a>
  </nav>
  `
})
export class AppList {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter();
}
