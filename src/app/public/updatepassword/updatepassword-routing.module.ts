import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepasswordPage } from './updatepassword.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepasswordPageRoutingModule {}
