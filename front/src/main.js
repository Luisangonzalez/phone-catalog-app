"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var phone_module_1 = require("./phone/phone.module");
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(phone_module_1.AppModule);
// We start our applications using main.ts, file by convention (see the style guide).
// The example below shows how we will bootstrap AppModule using the browser platform.
// Again, by convention, we name the AppModule file app.module.ts.
//# sourceMappingURL=main.js.map