"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var phone_component_1 = require("./phone.component");
var phone_list_component_1 = require("./phone-list.component");
var phone_detail_component_1 = require("./phone-detail.component");
var phones_store_1 = require("./phones.store");
var selectedItem_store_1 = require("./selectedItem.store");
var phone_service_1 = require("./phone.service");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var phone_effects_1 = require("./phone.effects");
// Root Angular2 Module
var AppModule = (function () {
    // Class to define the NgModule
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // Imports modules we depend on
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            store_1.StoreModule.forRoot({ phones: phones_store_1.phones, selectedItem: selectedItem_store_1.selectedItem }),
            effects_1.EffectsModule.forRoot([phone_effects_1.PhoneEffects])
        ],
        // Declare components, directives, pipes
        declarations: [
            phone_component_1.AppComponent,
            phone_list_component_1.AppList,
            phone_detail_component_1.AppDetail
        ],
        // Provider services to app root injector
        providers: [phone_service_1.PhonesService],
        // Bootstrap a component
        bootstrap: [phone_component_1.AppComponent]
    })
    // Class to define the NgModule
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=phone.module.js.map