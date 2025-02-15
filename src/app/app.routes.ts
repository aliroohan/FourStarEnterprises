import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MachineComponent } from './machine/machine.component';
import { VideopageComponent } from './videopage/videopage.component';
import { ContactComponent } from './contact/contact.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

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
