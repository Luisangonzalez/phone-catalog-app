import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { PhonesService } from './phone.service';
import { AppStore } from './appstore.model';

import { Phone } from './phone.model';
import { AppList } from './app-list.component';
import { AppDetail } from './app-detail.component';

import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
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
                phonesService.loadItems();

                this.phones = phonesService.phones;


                this.selectedItem = store.select('selectedItem');
                this.selectedItem.subscribe(v => console.log('Selected', v));


                phonesService.loadItems();
  }


  selectItem(phone: Phone) {
    this.store.dispatch({type: 'SELECT_ITEM', payload: phone});
  }
}
