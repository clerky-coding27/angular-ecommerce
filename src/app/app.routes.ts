import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeatsComponent } from './beats/beats.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Index route
  { path: 'about', component: AboutComponent }, // Index route
  { path: 'beats', component: BeatsComponent }, // Index route
];
