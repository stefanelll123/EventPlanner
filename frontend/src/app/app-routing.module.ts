import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
  {
    path: 'identity',
    loadChildren: () => import('./modules/identity/identity.module').then(m => m.IdentityModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
