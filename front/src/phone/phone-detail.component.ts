import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from './phone.model';

@Component({
  selector: 'app-detail',
  template: `
  <h1 [style.display]=enableTitle()>Select device in menu</h1>
  <div class="fem-card mdl-card mdl-shadow--2dp" [style.display]=enableMenu()>
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">{{selectedItem.branch}} - {{selectedItem.model}}</h2>
  </div>
  <div class="mdl-card__media">
      <img [src]="selectedItem.img">
  </div>
  <div class="mdl-card__supporting-text">
    <span class="label">Branch: </span>
    <span class="text">{{selectedItem.branch}}</span>
  </div>
  <div class="mdl-card__supporting-text">
    <span class="label">Model: </span>
    <span class="text">{{selectedItem.model}}</span>
  </div>
  <div class="mdl-card__supporting-text">
    <span class="label">Color: </span>
    <span class="text">{{selectedItem.color}}</span>
  </div>
  <div class="mdl-card__supporting-text">
    <span class="label">Price: </span>
    <span class="text">{{selectedItem.price}}</span>
  </div>
  <div class="mdl-card__supporting-text">
    <span class="label">Announced: </span>
    <span class="text">{{selectedItem.year}}</span>
  </div>
  </div>
  `
})
export class AppDetail {
  originalName: string;
  selectedItem: Phone;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set phone(value: Phone) {
    if (value) this.originalName = value.model;
    this.selectedItem = Object.assign({}, value);
  }

  enableMenu() {
    if (!this.selectedItem.id) {
      return 'none';
    } else {
      return '';
    }
  }

  enableTitle() {
    if (!this.selectedItem.id) {
      return '';
    } else {
      return 'none';
    }
  }
}
