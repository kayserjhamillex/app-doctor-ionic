import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasviewPage } from './citasview.page';

const routes: Routes = [
  {
    path: '',
    component: CitasviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasviewPageRoutingModule {}
