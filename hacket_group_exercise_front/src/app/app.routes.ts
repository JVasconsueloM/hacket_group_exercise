import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./presentation/pages/home/home.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./presentation/pages/dashboard/dashboard.component'),
      },
      {
        path: 'accounts',
        loadComponent: () => import('./presentation/pages/account-list/account-list.component'),
      },
      {
        path: 'activities',
        loadComponent: () => import('./presentation/pages/activity-list/activity-list.component'),
      },
    ],
  },
];
