import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);

// We start our applications using main.ts, file by convention (see the style guide).
// The example below shows how we will bootstrap AppModule using the browser platform.
// Again, by convention, we name the AppModule file app.module.ts.
