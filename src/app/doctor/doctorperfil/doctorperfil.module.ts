import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorperfilPageRoutingModule } from './doctorperfil-routing.module';

import { DoctorperfilPage } from './doctorperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorperfilPageRoutingModule
  ],
  declarations: [DoctorperfilPage]
})
export class DoctorperfilPageModule {}
