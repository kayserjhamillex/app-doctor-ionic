import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'doctor',
    // canActivate: [AuthGuardService],
    loadChildren: './doctor/doctor-routing.module#DoctorRoutingModule'
  },
  {
    path: 'valid',
    loadChildren: () => import('./public/validaruser/validaruser.module').then( m => m.ValidaruserPageModule)
  },
  {
    path: 'updatepass/:id',
    loadChildren: () => import('./public/updatepassword/updatepassword.module').then( m => m.UpdatepasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
