import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorperfilPage } from './doctorperfil.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorperfilPageRoutingModule {}
