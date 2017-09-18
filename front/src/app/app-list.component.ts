import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from './phone.model';

@Component({
  selector: 'app-list',
  template: `
  <div *ngFor="let phone of phones" (click)="selected.emit(phone)"
    class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{phone.model}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{phone.branch}}
    </div>
  </div>
  `
})
export class AppList {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter();
}
