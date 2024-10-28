import { Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { UserListComponent } from './user-list/user-list.component';
export const USERS_ROUTES: Routes = [
  { path: 'list', component: UserListComponent },
  { path: 'roles', component: RolesComponent },
];
