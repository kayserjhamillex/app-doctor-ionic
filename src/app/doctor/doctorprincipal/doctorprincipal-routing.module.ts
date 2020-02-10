import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorprincipalPage } from './doctorprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorprincipalPageRoutingModule {}
