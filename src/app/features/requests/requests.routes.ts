import { Routes } from '@angular/router';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { OpenRequestsComponent } from './open-requests/open-requests.component';

export const REQUESTS_ROUTES: Routes = [
  { path: 'open', component: OpenRequestsComponent },
  { path: 'all', component: AllRequestsComponent },
];
