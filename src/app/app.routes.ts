import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
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
    loadChildren: () =>
      import('./features/schedule/schedule.routes').then(
        (m) => m.SCHEDULE_ROUTES
      ),
  },
  {
    path: 'equipment',
    loadChildren: () =>
      import('./features/equipment/equipment.routes').then(
        (m) => m.EQUIPMENT_ROUTES
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders.routes').then((m) => m.ORDERS_ROUTES),
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
      import('./features/users/users.routes').then((m) => m.USERS_ROUTES),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./features/client/client.routes').then((m) => m.CLIENT_ROUTES),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./layout/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
