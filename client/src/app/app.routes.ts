import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './components/dashboard/dashboard';
import { ScheduleBuilder } from './components/schedule-builder/schedule-builder';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'demo', component: ScheduleBuilder }, // Demo mode
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'league/:id', component: ScheduleBuilder, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
