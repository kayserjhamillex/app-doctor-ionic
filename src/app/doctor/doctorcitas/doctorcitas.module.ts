import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorcitasPageRoutingModule } from './doctorcitas-routing.module';

import { DoctorcitasPage } from './doctorcitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorcitasPageRoutingModule
  ],
  declarations: [DoctorcitasPage]
})
export class DoctorcitasPageModule {}
