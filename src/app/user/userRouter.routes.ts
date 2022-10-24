import { NgModule } from '@angular/core';
import { LoginComponent } from './componants/login/login.component';
import { ProfileComponent } from './componants/profile/profile.component';


export const userRoutes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
 
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class UserRoutes { }
