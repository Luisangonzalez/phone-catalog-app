import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppList } from './app-list.component';
import { AppDetail } from './app-detail.component';

import { phones } from './phones.store';
import { selectedItem } from './selectedItem.store';

import { PhonesService } from './phone.service';


import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { PhoneEffects } from './phone.effects';

// Root Angular2 Module
@NgModule({
  // Imports modules we depend on
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        StoreModule.forRoot({phones, selectedItem}),
        EffectsModule.forRoot([PhoneEffects])

    ],
    // Declare components, directives, pipes
    declarations: [
        AppComponent,
        AppList,
        AppDetail
      ],
    // Provider services to app root injector
    providers: [PhonesService],
    // Bootstrap a component
    bootstrap: [AppComponent]
})
// Class to define the NgModule
export class AppModule { }
