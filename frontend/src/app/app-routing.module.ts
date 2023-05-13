import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { IsAuthenticatedGuard } from './services/auth/isAuthenticatedGuard';

const routes: Routes = [
  {path: '', redirectTo: '/manager', pathMatch: 'full'},
  {path: 'manager', loadChildren: () => import('./manager/manager.module').then((m) => m.ManagerModule), canActivate: [IsAuthenticatedGuard]},
  {path: 'login',  component: LoginComponent},
  {path: '**', redirectTo: '/manager', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
