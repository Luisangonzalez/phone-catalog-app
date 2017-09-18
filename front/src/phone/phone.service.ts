import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import * as Rx from 'rxjs/Rx'; //

import { AppStore } from './appstore.model';
import { Phone } from './phone.model';

const BASE_URL = 'http://localhost:5000/phones/';

@Injectable()
export class PhonesService {
  phones: Observable<Array<Phone>>;

  constructor(private store: Store<AppStore>) {
    // this.phones = Rx.Observable.combineLatest(
    //   store.select('phones'));
    this.phones = store.select('phones');
  }

  // loadItems() {
  //   this.http.get(BASE_URL)
  //     .map(res => res.json());
  // }

}
