import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidaruserPage } from './validaruser.page';

const routes: Routes = [
  {
    path: '',
    component: ValidaruserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidaruserPageRoutingModule {}
