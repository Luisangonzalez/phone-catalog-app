// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { PhonesService } from './phone.service';
const BASE_URL = 'http://localhost:5000/phones/';

@Injectable()
export class PhoneEffects {
  // Listen for the 'LOAD_ITEM' action
  @Effect() loadItems$: Observable<Action> = this.actions$.ofType('LOAD_ITEM')
    // Map the payload into JSON to use as the request body
    .map(toPayload)
    .mergeMap((payload) =>
        // If successful, dispatch success action with result
        this.http.get(BASE_URL)
          .map((res) => res.json())
          .map((phone) => ({ type: 'ADD_ITEMS', payload: phone }))
    );

  constructor(
    private http: Http,
    private actions$: Actions,
    private phonesService: PhonesService
  ) {}
}
