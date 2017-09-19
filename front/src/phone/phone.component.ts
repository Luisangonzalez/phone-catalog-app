import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { PhonesService } from './phone.service';
import { AppStore } from './appstore.model';

import { Phone } from './phone.model';
import { AppList } from './phone-list.component';
import { AppDetail } from './phone-detail.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app',
  template: `<html>
    <head>
      <!-- Material Design Lite -->
      <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
      <!-- Material Design icon font -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
    <body>
      <!-- Uses a transparent header that draws on top of the layout's background -->
      <div class="demo-layout-transparent mdl-layout mdl-js-layout">
        <header class="mdl-layout__header mdl-layout__header--transparent">
          <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">Phone Catalog App</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation -->
            <app-list [phones]="phones | async"
              (selected)="selectItem($event)">
            </app-list>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">Select device</span>
          <app-list [phones]="phones | async"
            (selected)="selectItem($event)">
          </app-list>
        </div>
        <main class="mdl-layout__content">
            <app-detail [phone]="selectedItem | async">Select an Item</app-detail>
        </main>
      </div>
    </body>
  </html>`,
  styleUrls: ['../styles/main.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PhonesService]
})
export class AppComponent {
  phones: Observable<Array<Phone>>;
  selectedItem: Observable<Phone>;

  constructor(private phonesService: PhonesService,
              private store: Store<AppStore>) {
                // this.phones = phonesService.
                // this.selectedItem = store.select('selectedItem');
                // phonesService.loadItems();

                this.loadItem();

                this.phones = phonesService.phones;


                this.selectedItem = store.select('selectedItem');
                this.selectedItem.subscribe((v) => console.log('Selected', v));


                // phonesService.loadItems();
  }


  selectItem(phone: Phone) {
    this.store.dispatch({type: 'SELECT_ITEM', payload: phone});
  }

  loadItem(phone?: Phone) {
    this.store.dispatch({type: 'LOAD_ITEM', payload: phone});
  }
}
