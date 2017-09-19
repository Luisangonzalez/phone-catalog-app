"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var phone_service_1 = require("./phone.service");
var store_1 = require("@ngrx/store");
var AppComponent = (function () {
    function AppComponent(phonesService, store) {
        // this.phones = phonesService.
        // this.selectedItem = store.select('selectedItem');
        // phonesService.loadItems();
        this.phonesService = phonesService;
        this.store = store;
        this.loadItem();
        this.phones = phonesService.phones;
        this.selectedItem = store.select('selectedItem');
        this.selectedItem.subscribe(function (v) { return console.log('Selected', v); });
        // phonesService.loadItems();
    }
    AppComponent.prototype.selectItem = function (phone) {
        this.store.dispatch({ type: 'SELECT_ITEM', payload: phone });
    };
    AppComponent.prototype.loadItem = function (phone) {
        this.store.dispatch({ type: 'LOAD_ITEM', payload: phone });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "<html>\n    <head>\n      <!-- Material Design Lite -->\n      <script src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>\n      <link rel=\"stylesheet\" href=\"https://code.getmdl.io/1.3.0/material.indigo-pink.min.css\">\n      <!-- Material Design icon font -->\n      <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n    </head>\n    <body>\n      <!-- Uses a transparent header that draws on top of the layout's background -->\n      <div class=\"demo-layout-transparent mdl-layout mdl-js-layout\">\n        <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n          <div class=\"mdl-layout__header-row\">\n            <!-- Title -->\n            <span class=\"mdl-layout-title\" data-element=\"header-title\">Phone Catalog App</span>\n            <!-- Add spacer, to align navigation to the right -->\n            <div class=\"mdl-layout-spacer\"></div>\n            <!-- Navigation -->\n            <app-list [phones]=\"phones | async\"\n              (selected)=\"selectItem($event)\">\n            </app-list>\n          </div>\n        </header>\n        <div class=\"mdl-layout__drawer\">\n          <span class=\"mdl-layout-title\">Select device</span>\n          <app-list [phones]=\"phones | async\"\n            (selected)=\"selectItem($event)\">\n          </app-list>\n        </div>\n        <main class=\"mdl-layout__content\">\n            <app-detail [phone]=\"selectedItem | async\">Select an Item</app-detail>\n        </main>\n      </div>\n    </body>\n  </html>",
        styleUrls: ['../styles/main.scss'],
        encapsulation: core_2.ViewEncapsulation.None,
        providers: [phone_service_1.PhonesService]
    }),
    __metadata("design:paramtypes", [phone_service_1.PhonesService,
        store_1.Store])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=phone.component.js.map