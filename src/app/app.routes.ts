import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'services', 
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) 
  },
  { 
    path: 'fabrics', 
    loadComponent: () => import('./components/fabrics/fabrics.component').then(m => m.FabricsComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) 
  },
  { path: '**', redirectTo: '' }
];
