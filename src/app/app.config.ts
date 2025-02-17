import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRouting } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideRouter(routes) , provideServerRouting(serverRoutes), provideClientHydration(withEventReplay()), provideHttpClient()],
};
