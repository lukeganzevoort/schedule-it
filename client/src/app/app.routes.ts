import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ScheduleBuilder } from './components/schedule-builder/schedule-builder';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'scheduler', component: ScheduleBuilder },
  { path: '**', redirectTo: '' },
];
