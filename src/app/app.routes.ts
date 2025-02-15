import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MachineComponent } from './machine/machine.component';
import { VideopageComponent } from './videopage/videopage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MachineResolver } from './machine.service';
import { provideClientHydration } from '@angular/platform-browser';
import { inject, ErrorHandler } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'machine/:type/:subtype',
    component: MachineComponent,
    resolve: {
      params: MachineResolver,
    },
    providers: [
      {
        provide: provideClientHydration(),
        useValue: 'client'
      }
    ]
  },
  {
    path: 'machines/:type/:subtype',
    redirectTo: (route) => {
      const errorHandler = inject(ErrorHandler);
      const typeParam = route.params['type'];
      const subtypeParam = route.params['subtype'];
      console.log(typeParam, subtypeParam);
      if (!typeParam || !subtypeParam) {
        errorHandler.handleError(new Error('Invalid machine type or subtype'));
        return '/home'; // Redirect to home or any other default route in case of error
      } else {
        console.log('Redirecting to /machine/' + typeParam + '/' + subtypeParam); 
        return `/machine/${typeParam}/${subtypeParam}`;
      }
    },
    pathMatch: 'full'
  },
  {
    path: 'videos',
    component: VideopageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  }
];