import { Route } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { ProfileDashboard } from './profile/profile-dashboard/profile-dashboard';

export const accountRoutes: Route[] = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: ProfileDashboard },
];
