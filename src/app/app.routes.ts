import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'equipment',
    loadComponent: () =>
      import('./features/equipment/equipment.component').then(
        (m) => m.EquipmentComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./features/schedule/schedule.component').then(
        (m) => m.ScheduleComponent
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.routes').then(
        (m) => m.ORDERS_ROUTES
      ),
  },
  {
    path: 'requests',
    loadChildren: () =>
      import('./features/requests/requests.routes').then(
        (m) => m.REQUESTS_ROUTES
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.routes').then(
        (m) => m.USERS_ROUTES
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./layout/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
