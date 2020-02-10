import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorcitasPage } from './doctorcitas.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorcitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorcitasPageRoutingModule {}
