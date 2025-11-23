import 'zone.js/node';
import { renderModule } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';

export function render(url: string) {
  return renderModule(AppServerModule, {
    document: '<app-root></app-root>',
    url,
  });
}
