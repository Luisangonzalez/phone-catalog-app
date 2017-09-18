import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from './phone.model';

@Component({
  selector: 'app-detail',
  template: `
  <div class="fem-card mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">{{selectedItem.branch}} - {{selectedItem.model}}</h2>
  </div>
  <div class="mdl-card__media">
      <img [src]="selectedItem.img">
  </div>
  <div class="mdl-card__supporting-text">
  {{selectedItem.branch}}
  </div>
  <div class="mdl-card__supporting-text">
  {{selectedItem.model}}
  </div>
  <div class="mdl-card__supporting-text">
  {{selectedItem.color}}
  </div>
  <div class="mdl-card__supporting-text">
  {{selectedItem.price}}
  </div>
  <div class="mdl-card__supporting-text">
  {{selectedItem.year}}
  </div>
  </div>
  `
})
export class AppDetail {
  originalName: string;
  selectedItem: Phone;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set phone(value: Phone){
    if (value) this.originalName = value.model;
    this.selectedItem = Object.assign({}, value);
  }
}
