import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Root Angular2 Module
@NgModule({
  // Imports modules we depend on
    imports: [
        BrowserModule,
        HttpModule
    ],
    // Declare components, directives, pipes
    declarations: [
        AppComponent    ],
    // Provider services to app root injector
    // providers: [],
    // Bootstrap a component
    bootstrap: [AppComponent]
})
// Class to define the NgModule
export class AppModule { }
