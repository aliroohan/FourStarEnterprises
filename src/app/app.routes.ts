import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MachineComponent } from './machine/machine.component';
import { VideopageComponent } from './videopage/videopage.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MachineResolver } from './machine.service';
import { provideClientHydration } from '@angular/platform-browser';

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
        provide: provideClientHydration,
        useValue: 'client' // This disables prerendering for this route
      }
    ]
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