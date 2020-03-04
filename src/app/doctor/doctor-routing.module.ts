import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home/:id',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./doctorprincipal/doctorprincipal.module').then( m => m.DoctorprincipalPageModule)
  },
  {
    path: 'citas/:id',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./doctorcitas/doctorcitas.module').then( m => m.DoctorcitasPageModule)
  },
  {
    path: 'perfil/:id',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./doctorperfil/doctorperfil.module').then( m => m.DoctorperfilPageModule)
  },
  {
    path: 'citasview/:id',
    loadChildren: () => import('./citasview/citasview.module').then( m => m.CitasviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
