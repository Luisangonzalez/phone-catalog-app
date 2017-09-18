import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from './phone.model';

@Component({
  selector: 'app-detail',
  template: `
  <div class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Create New Item</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Name</label>
            <input [(ngModel)]="selectedItem.model"
              name="name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Description</label>
            <input [(ngModel)]="selectedItem.branch"
              name="description"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="text">
          </div>
      </form>
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
