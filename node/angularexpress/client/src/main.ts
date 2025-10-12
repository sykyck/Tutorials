import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (environment.useStandalone) {
  // 👉 Standalone app bootstrapping
  import('@angular/platform-browser').then(({ bootstrapApplication }) => {
    import('./app/app.config').then(({ appConfig }) => {
      import('./app/app.component').then(({ AppComponent }) => {
        bootstrapApplication(AppComponent, appConfig)
          .catch(err => console.error(err));
      });
    });
  });
} else {
  // 👉 Module-based bootstrapping
  import('@angular/platform-browser-dynamic').then(({ platformBrowserDynamic }) => {
    import('./app/app.module').then(({ AppModule }) => {
      platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => console.error(err));
    });
  });
}
