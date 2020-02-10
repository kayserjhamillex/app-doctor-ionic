import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorprincipalPageRoutingModule } from './doctorprincipal-routing.module';

import { DoctorprincipalPage } from './doctorprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorprincipalPageRoutingModule
  ],
  declarations: [DoctorprincipalPage]
})
export class DoctorprincipalPageModule {}
